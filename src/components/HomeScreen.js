import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Options from './Options';
import Packages from './Packages';
import MedicineCategories from './MedicineCategories';
import BottomScreen from './BottomScreen';

const imageArray = [
  '../assets/slideshowImage1.jpeg',
  '../assets/slideshowImage2.png',
  '../assets/slideshowImage3.jpeg',
  '../assets/slideshowImage4.jpeg',
  '../assets/slideshowImage5.jpeg',
  '../assets/slideshowImage6.jpeg',
  '../assets/slideshowImage7.png',
];

export default class HomeScreen extends Component {
  state = {
    active: 0,
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.homeTab}>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../assets/zoylologo.jpeg')}
            />
            <Text style={styles.logoTitle}> zoylo</Text>
          </View>

          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Icon Screen', 'Welcome to Location Icon!', [
                  {
                    text: 'OK',
                    onPress: () => console.log(' Location Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                style={styles.locationPinIcon}
                source={require('../assets/locationpin.png')}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.homeTabText}> | </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Icon Screen', 'Welcome to Shopping Cart Icon!', [
                  {
                    text: 'OK',
                    onPress: () =>
                      console.log(' Shopping Cart Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                style={styles.shoppingCartIcon}
                source={require('../assets/shoppingcart.png')}
              />
              <View style={styles.cartNumber}>
                <Text style={styles.cartNumberValue}>0</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={this.change}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Offer Screen', 'Welcome to Offer!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                source={require('../assets/slideshowImage1.jpeg')}
                style={styles.images}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('Offer Screen', 'Welcome to Offer!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                source={require('../assets/slideshowImage2.png')}
                style={styles.images}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('Offer Screen', 'Welcome to Offer!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                source={require('../assets/slideshowImage3.jpeg')}
                style={styles.images}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('Offer Screen', 'Welcome to Offer!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                source={require('../assets/slideshowImage4.jpeg')}
                style={styles.images}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('Offer Screen', 'Welcome to Offer!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                source={require('../assets/slideshowImage5.jpeg')}
                style={styles.images}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('Offer Screen', 'Welcome to Offer!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                source={require('../assets/slideshowImage6.jpeg')}
                style={styles.images}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert('Offer Screen', 'Welcome to Offer!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Icon OK Pressed'),
                  },
                ]);
              }}>
              <Image
                source={require('../assets/slideshowImage7.png')}
                style={styles.images}
              />
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.pagination}>
            {imageArray.map((item, index) => (
              <Text
                key={index}
                style={
                  index === this.state.active
                    ? styles.pagingActiveText
                    : styles.pagingText
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.typeContainer}>
          <View style={styles.typeCard}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Type Card Screen', 'Welcome to Medicines Card!', [
                  {
                    text: 'OK',
                    onPress: () => console.log('Medicines Card OK Pressed'),
                  },
                ]);
              }}>
              <Image
                style={styles.typeIcon}
                source={require('../assets/pillsIcon.png')}
              />
              <Text style={styles.typeText}>Medicines</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.typeCard}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Type Card Screen',
                  'Welcome to Tests & Packages Card!',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('Tests & Packages OK Pressed'),
                    },
                  ],
                );
              }}>
              <Image
                style={styles.typeIcon}
                source={require('../assets/microscopeIcon1.jpeg')}
              />
              <Text style={styles.typeText}>Tests &</Text>
              <Text style={styles.typeText}>Packages</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.typeCard}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Type Card Screen',
                  'Welcome to Online Consultation Card!',
                  [
                    {
                      text: 'OK',
                      onPress: () =>
                        console.log('Online Consultation OK Pressed'),
                    },
                  ],
                );
              }}>
              <Image
                style={styles.typeIcon}
                source={require('../assets/consultationIcon.png')}
              />
              <Text style={styles.typeText}>Online</Text>
              <Text style={styles.typeText}>Consultation</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Options />
        <Packages />
        <MedicineCategories />
        <BottomScreen />
        <Text />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeTab: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderColor: 'lightgrey',
    borderWidth: 1,
    shadowColor: 'lightgrey',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    flex: 2,
    flexDirection: 'row',
  },
  logoImage: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#483d8b',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  locationPinIcon: {
    height: 30,
    width: 30,
  },
  shoppingCartIcon: {
    height: 30,
    width: 30,
  },
  cartNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: -13,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  cartNumberValue: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
  },
  homeTabText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageContainer: {
    backgroundColor: 'white',
  },
  images: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    marginHorizontal: 10,
    marginBottom: 45,
    marginTop: 20,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pagingText: {
    color: '#F0F0F0',
    margin: 3,
    fontSize: 19,
  },
  pagingActiveText: {
    color: '#ffa500',
    margin: 3,
    fontSize: 19,
  },
  typeContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginTop: 12,
  },
  typeCard: {
    height: 120,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    padding: 10,
    margin: 5,
  },
  typeIcon: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  typeText: {
    alignSelf: 'center',
  },
});
