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

      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.wallpaer}
          source={{
            uri:
              'https://i.pinimg.com/originals/e6/91/40/e69140ca846f1f3872b05602c83229b3.jpg',
          }}>
          <View style={styles.titleView}>
            <View style={styles.leftSide}>
              <Text style={styles.title}>Online Doctor Consultation</Text>
              {/* <Text style={styles.title}>presciption</Text> */}
              <Text style={styles.text}>
                Consult with the top medical practitioners in your city. Recover
                from the comfort of your house
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Ad Screen',
                  'Welcome to Online Doctor Consultation!',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ],
                );
              }}>
              <Text style={styles.filledButton}>CONSULT NOW</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.wallpaer}
          source={{
            uri:
              'https://www.presentationmagazine.com/backgrounds/images/6/1/61218643/background_61218643_468_3.jpg',
          }}>
          <View style={styles.titleView}>
            <View style={styles.leftSide}>
              <Text style={styles.title}>
                Take Free Online Health Assessment
              </Text>
              {/* <Text style={styles.title}>presciption</Text> */}
              <Text style={styles.text}>Know Your Health Status now!</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Ad Screen', 'Welcome to Online Assessment!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                  },
                ]);
              }}>
              <Text style={styles.button}>START</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.wallpaer}
          source={{
            uri:
              'https://powerpoint.crystalgraphics.com/themes/crystal/images/big-img-4-3.png',
          }}>
          <View style={styles.titleView}>
            <View style={styles.leftSide}>
              <Text style={styles.title}>Corporate health plans</Text>
              <Text style={styles.title}>Just for your workplace</Text>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Login Screen',
                    'Login to your Corporate Account !',
                    [
                      {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                      },
                    ],
                  );
                }}>
                <View style={styles.login}>
                  <Text style={styles.loginButton}>{'>'}</Text>
                  <Text style={styles.loginLink}>
                    Login to your Corporate Account To Avail Multiple Benefits
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.wallpaer}
          source={{
            uri:
              'https://i.pinimg.com/originals/c1/90/01/c19001be3a43f63f0aebf634b63a7326.jpg',
          }}>
          <Text style={styles.blogText}>Blogs</Text>
          <View style={styles.blogContainer}>
            <Text style={styles.quote}>
              "A good laugh and a long sleep are the best cures in the doctor's
              book."
            </Text>
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
    height: 180,
    width: 360,
    margin: 10,
    paddingLeft: 7,
  },
  wallpaer: {
    alignItems: 'center',
    flex: 1,
    resizeMode: 'cover',
    height: 180,
    width: 360,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
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
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 5,
    marginBottom: 50,
    marginRight: 10,
    height: 35,
    width: 130,
  },
  text: {
    color: 'black',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  leftSide: {
    flex: 1,
  },
  filledButton: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'orange',
    borderColor: 'orange',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 5,
    marginBottom: 50,
    marginRight: 10,
    height: 35,
    width: 130,
  },
  login: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 5,
  },
  loginButton: {
    height: 20,
    width: 20,
    color: 'orange',
    borderRadius: 25,
    borderColor: 'orange',
    borderWidth: 2,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingLeft: 6,
  },
  loginLink: {
    color: 'orange',
    paddingRight: 20,
    paddingLeft: 10,
    paddingTop: 5,
  },
  //   blogContainer: {
  //     fontSize: 30,
  //     fontWeight: '700',
  //     paddingHorizontal: 15,
  //   },
  blogText: {
    alignSelf: 'flex-start',
    paddingTop: 35,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  quote: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default BottomScreen;
