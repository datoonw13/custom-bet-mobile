import React from 'react';
import {Button, ThemeProvider} from 'react-native-elements';
const LoginScreen = () => {
  return (
    <>
      <ThemeProvider>
        <Button title="Hey!" />
      </ThemeProvider>
    </>
  );
};

export default LoginScreen;
