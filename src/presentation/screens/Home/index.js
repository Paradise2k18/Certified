import React from 'react';
import {Image, StyleSheet, View, Text, FlatList} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import moment from 'moment';
import {logo} from 'assets';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
    this.fetchRss();
  }

  renderNewsItem = (item, index) => (
    <View style={styles.newsItemContainer} key={index}>
      <View style={styles.newsItemContentContainer}>
        <View style={styles.newsItemImageContainer}>
          <Image
            style={styles.newsItemImage}
            source={{
              uri:
                'https://soto.house.gov/sites/soto.house.gov/files/featured_image/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png',
            }}
          />
        </View>
        <View style={styles.newsItemTextContainer}>
          <Text>{item.title}</Text>
          <Text style={styles.newsItemText}>
            {moment(item.published).format('LLL')}
          </Text>
        </View>
      </View>
    </View>
  );

  fetchRss = () => {
    return fetch('http://www.reddit.com/r/news/.rss')
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
        this.setState({feed: rss.items});
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Certified</Text>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} resizeMode="stretch" source={logo} />
        </View>
        <Text style={styles.titleText}>Who we are?</Text>
        <View style={styles.headingContainer}>
          <Text>
            We are IT outsourcing company specializing in software development
            and consultancy services. Certified employs best practices and
            latest standards in order to produce high quality and reliable
            software.
          </Text>
        </View>
        <View style={styles.newsContainer}>
          <Text style={styles.titleText}>Company news</Text>
          <FlatList
            data={this.state.feed}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => this.renderNewsItem(item, index)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    height: '15%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  logoContainer: {
    height: 100,
    backgroundColor: 'white',
  },
  logo: {
    height: 100,
    width: 300,
    alignSelf: 'center',
  },
  newsContainer: {
    flex: 1,
    paddingBottom: 30,
  },
  newsItemContainer: {
    borderWidth: 0.5,
    padding: 10,
    borderColor: 'lightgrey',
    marginBottom: 5,
    backgroundColor: 'white',
    flex: 1,
  },
  newsItemContentContainer: {
    flexDirection: 'row',
  },
  newsItemImageContainer: {
    height: 50,
    width: 70,
  },
  newsItemImage: {
    flex: 1,
  },
  newsItemTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  newsItemText: {
    marginTop: 4,
    fontSize: 10,
    color: 'grey',
  },
});
