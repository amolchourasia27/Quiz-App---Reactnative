import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  const resultBanner =
    score > 40
      ? 'https://raw.githubusercontent.com/amolchourasia27/imageAssets/main/Stand%20out-amico.png'
      : 'https://github.com/amolchourasia27/imageAssets/blob/main/Bad%20idea-rafiki.png?raw=true';
  return (
    <View>
      <View>
        <Title titleText="Results" />
        <Text style={styles.scoreText}>{score} out of 100</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 350,
    width: 350,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '70%',
    backgroundColor: '#1A759f',
    padding: 26,
    borderRadius: 45,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  text: {
    color: 'white',
  },
  scoreText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
