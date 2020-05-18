import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, PingScreen} from '../screens';

const Stack = createStackNavigator();

const StartupNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ping" component={PingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// class StartupNavigation extends React.PureComponent {
//    render() {
//       const StartupStackNavigator = createStackNavigator({
//             Login: { screen: LoginScreen },
//          },
//          { defaultNavigationOptions: { ...TabHeaderStyles } },
//       );
//
//       const AppContainer = createAppContainer(
//          createSwitchNavigator(
//             {
//                Ping: { screen: PingScreen },
//             }
//          ),
//       );
//       return (
//          <AppContainer
//             ref={navigatorRef => navigationService.setTopLevelNavigator(navigatorRef)}
//          />
//       );
//    }
// }

// const TabHeaderStyles = {
//    headerStyle: {
//       backgroundColor: '#2e3192',
//       borderBottomWidth: 0,
//       elevation: 0,
//       shadowOpacity: 0,
//    },
//    headerBackTitle: null,
//    headerTintColor: '#fff',
//    headerTitleStyle: {
//       fontWeight: '100',
//       // fontFamily: Caps,
//       fontSize: 14,
//    },
// };

export default StartupNavigation;
