import { dropDownAlertRef } from "../App";

const notificationService = {
  notify: (type, title, message) => {
    dropDownAlertRef.alertWithType(type, title, message);
  }
};

export default notificationService;
