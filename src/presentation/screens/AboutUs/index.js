import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as data from './aboutUs.json';

export class AboutUsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Who we are?</Text>
        <View style={styles.contentContainer}>
          <Text>{data.whoWeAre}</Text>
        </View>
        <Text style={styles.headerText}>Service we provide:</Text>
        <View style={styles.contentContainer}>
          <Text>{data.service}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    height: '15%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
