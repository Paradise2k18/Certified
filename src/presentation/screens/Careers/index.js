import React from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import * as data from './careers.json';

export class CareersScreen extends React.Component {
  renderCareerItem = (item, index) => (
    <View style={styles.careerItemContainer} key={index}>
      <View style={styles.careetItemTitleContainer}>
        <Image
          resizeMode="repeat"
          style={styles.careerItemImage}
          source={{uri: item.imageUrl}}
        />
        <Text style={styles.careerItemTitleText}>{item.title}</Text>
      </View>
      <Text>{item.description}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Join Certified</Text>
        <FlatList
          data={data.careers}
          renderItem={({item, index}) => this.renderCareerItem(item, index)}
        />
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
  careerItemContainer: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginBottom: 5,
    backgroundColor: 'white',
    minHeight: 80,
    padding: 15,
  },
  careerItemImage: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  careetItemTitleContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  careerItemTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
