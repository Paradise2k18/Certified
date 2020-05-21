import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from 'navigation';

console.ignoredYellowBox = [
  'Warning: Navigator',
  'Warning: Overriding',
  'Remote',
  'Task',
  'Native TextInput',
  'Require cycle:',
  'RCTRootView cancelTouches',
];

const styles = StyleSheet.create({
  appNavigator: {
    marginTop: 30,
  },
});

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator style={styles.appNavigator} />
      </NavigationContainer>
    );
  }
}

export default App;
