import React from 'react';
import {enableScreens} from 'react-native-screens';
import Loader from './components/loader';
import DropdownAlert from 'react-native-dropdownalert';
import StartupNavigation from './navigation/StartupNavigation';

export let dropDownAlertRef;
export let loaderRef;

enableScreens();

const App = () => {
  return (
    <>
      <StartupNavigation />
      <Loader ref={(ref) => (loaderRef = ref)} />
      <DropdownAlert
        updateStatusBar={false}
        closeInterval={3000}
        ref={(ref) => (dropDownAlertRef = ref)}
      />
    </>
  );
};

export default App;
