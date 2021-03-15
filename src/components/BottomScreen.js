import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

function BottomScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.wallpaer}
          source={{uri: 'https://cdn.wallpapersafari.com/99/11/8fFeYJ.jpg'}}>
          <View style={styles.titleView}>
            <View style={styles.leftSide}>
              <Text style={styles.title}>Order Medicine using presciption</Text>
              {/* <Text style={styles.title}>presciption</Text> */}
              <Text style={styles.text}>& Get Medicines Delivered at Home</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Ad Screen',
                  'Welcome to Order Medincine using presciption!',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ],
                );
              }}>
              <Text style={styles.button}>UPLOAD</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    width: 360,
    margin: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  wallpaer: {
    flex: 1,
    resizeMode: 'cover',
    height: 200,
    width: 360,
  },
  titleView: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingTop: 20,
    paddingRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 15,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'orange',
    color: 'orange',
    fontSize: 16,
    paddingHorizontal: 20,
    alignSelf: 'center',
    paddingVertical: 5,
    marginBottom: 50,
  },
  text: {
    color: 'darkgrey',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  leftSide: {
    flex: 1,
  },
});

export default BottomScreen;
