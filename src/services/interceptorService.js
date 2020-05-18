import axios from "axios";
import { BackHandler } from "react-native";
import navigationService from "./navigationService";
import AsyncStorage from "@react-native-community/async-storage";
import notificationService from "./notificationService";
import loader from "./loaderService";
import { backendUrl } from "./credentials";

let canNotPressBackButton = false;
let counter = 0;
const onBackButtonPressAndroid = __ => {
  return canNotPressBackButton;
};
BackHandler.addEventListener("hardwareBackPress", onBackButtonPressAndroid);

const axiosInstance = axios.create({
  baseURL: `${backendUrl}`
});

axiosInstance.interceptors.request.use(
  async request => {
    canNotPressBackButton = true;
    if (++counter < 2) {
      loader.start();
    }
    const data = await AsyncStorage.getItem("authData").then(data => JSON.parse(data));
    return request;
  },
  error => {
    canNotPressBackButton = false;
    loader.stop();
    return Promise.reject({ ...error });
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return onResponseFulfilled(response);
  },
  error => {
    return onResponseRejected(error);
  }
);


const onResponseFulfilled = response => {
  canNotPressBackButton = false;
  if (--counter < 1) {
    loader.stop();
  }
  return response.data;
};

const onResponseRejected = error => {
  canNotPressBackButton = false;
  if (--counter < 1) {
    loader.stop();
  }
  if (error.response.status === 408 || error.response.status === 504) {
    notificationService.notify("error", "შეცდომა #" + error.response.status, "რექვესთს ვადა გაუვიდა");
  } else if (error.response.status === 404 || error.response.status === 504) {
    notificationService.notify("error", "შეცდომა #" + error.response.status, "ვერ მოიძებნა");
  } else if (error.response.status === 500) {
    notificationService.notify("error", "შეცდომა #" + error.response.status, "სისტეემაში დაფიქსირდა შეცდომა");
  }
  if (error.response.status === 401 || error.response.status === 404 || error.response.status === 403) {
    AsyncStorage.setItem("authData", "");
    navigationService.navigate("Login");
  }
  return Promise.reject({ ...error });
};

export default axiosInstance;
