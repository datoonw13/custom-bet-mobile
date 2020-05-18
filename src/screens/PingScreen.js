import {useEffect} from 'react';
// import axiosInstance from "../services/interceptorService";
// import navigationService from "../services/navigationService";

function PingScreen({navigation}) {
  useEffect(() => {
    //    axiosInstance.get("ping").then(
    //       response => {
    //       }
    //    );
    navigation.navigate('Login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default PingScreen;
