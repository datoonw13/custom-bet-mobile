import { CommonActions } from "@react-navigation/native";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
     CommonActions.navigate({
      routeName,
      params
    })
  );
}

function getRouteNameByState(nav) {
  if (Array.isArray(nav.routes) && nav.routes.length > 0) {
    return getRouteNameByState(nav.routes[nav.index]);
  } else {
    return nav.routeName;
  }
}

function getCurrentRoute() {
  if (!_navigator) {
    return null;
  }
  getRouteNameByState(_navigator.state.nav);
}

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
  getRouteNameByState
};
