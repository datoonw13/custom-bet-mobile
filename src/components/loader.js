import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-spinkit';

export default class Loader extends Component {
  state = {
    loaderIsActive: false,
  };
  start = () => {
    this.setState({loaderIsActive: true});
  };
  stop = () => {
    this.setState({loaderIsActive: false});
  };

  render() {
    return (
      <View style={styles.horizontal}>
        <Spinner
          size={40}
          color={'#2E3192'}
          isVisible={this.state.loaderIsActive}
          type={'Pulse'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
