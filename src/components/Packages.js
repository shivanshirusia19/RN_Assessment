import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  //Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

function Packages() {
  return (
    <View style={styles.container}>
      <View style={styles.packageTitle}>
        <Text style={styles.text}>Diagnostic Packages by Zoylo Labs</Text>
        <Text style={styles.viewText}>View All</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.packageCard}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Package Card Screen',
                'Welcome to Diagnostic Packages!',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Package Card OK Pressed'),
                  },
                ],
              );
            }}>
            <View style={styles.offerCardOdd}>
              <Text style={styles.type}>ADVANCED</Text>
              <Text style={styles.titleDouble}>
                Zoylo Health Checkup with Iron Studies
              </Text>
              <Text style={styles.testsNumber}>83 tests included</Text>
            </View>
            <View style={styles.priceCard}>
              <Text style={styles.actualPrice}>₹ 3250.00</Text>
              <Text style={styles.dash}>___________</Text>
              <View style={styles.price}>
                <Text style={styles.discountedPrice}>₹ 1299.00</Text>
                <Text style={styles.discount}>60% off</Text>
              </View>
              <Text style={styles.bookText}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.packageCard}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Package Card Screen',
                'Welcome to Diagnostic Packages!',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Package Card OK Pressed'),
                  },
                ],
              );
            }}>
            <View style={styles.offerCardEven}>
              <Text style={styles.type}>ADVANCED</Text>
              <Text style={styles.titleSingle}>FeverPackage 3</Text>
              <Text style={styles.testsNumber}>66 tests included</Text>
            </View>
            <View style={styles.priceCard}>
              <Text style={styles.actualPrice}>₹ 3300.00</Text>
              <Text style={styles.dash}>___________</Text>
              <View style={styles.price}>
                <Text style={styles.discountedPrice}>₹ 1299.00</Text>
                <Text style={styles.discount}>61% off</Text>
              </View>
              <Text style={styles.bookText}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.packageCard}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Package Card Screen',
                'Welcome to Diagnostic Packages!',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Package Card OK Pressed'),
                  },
                ],
              );
            }}>
            <View style={styles.offerCardOdd}>
              <Text style={styles.type}>ADVANCED</Text>
              <Text style={styles.titleDouble}>
                Zoylo Health Checkup with Iron Studies
              </Text>
              <Text style={styles.testsNumber}>83 tests included</Text>
            </View>
            <View style={styles.priceCard}>
              <Text style={styles.actualPrice}>₹ 3250.00</Text>
              <Text style={styles.dash}>___________</Text>
              <View style={styles.price}>
                <Text style={styles.discountedPrice}>₹ 1299.00</Text>
                <Text style={styles.discount}>60% off</Text>
              </View>
              <Text style={styles.bookText}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.packageCard}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Package Card Screen',
                'Welcome to Diagnostic Packages!',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Package Card OK Pressed'),
                  },
                ],
              );
            }}>
            <View style={styles.offerCardEven}>
              <Text style={styles.type}>ADVANCED</Text>
              <Text style={styles.titleDouble}>
                Zoylo Health Checkup with Iron Studies
              </Text>
              <Text style={styles.testsNumber}>83 tests included</Text>
            </View>
            <View style={styles.priceCard}>
              <Text style={styles.actualPrice}>₹ 3250.00</Text>
              <Text style={styles.dash}>___________</Text>
              <View style={styles.price}>
                <Text style={styles.discountedPrice}>₹ 1299.00</Text>
                <Text style={styles.discount}>60% off</Text>
              </View>
              <Text style={styles.bookText}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.packageCard}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Package Card Screen',
                'Welcome to Diagnostic Packages!',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Package Card OK Pressed'),
                  },
                ],
              );
            }}>
            <View style={styles.offerCardEven}>
              <Text style={styles.type}>ADVANCED</Text>
              <Text style={styles.titleSingle}>FeverPackage 3</Text>
              <Text style={styles.testsNumber}>66 tests included</Text>
            </View>
            <View style={styles.priceCard}>
              <Text style={styles.actualPrice}>₹ 3300.00</Text>
              <Text style={styles.dash}>___________</Text>
              <View style={styles.price}>
                <Text style={styles.discountedPrice}>₹ 1299.00</Text>
                <Text style={styles.discount}>61% off</Text>
              </View>
              <Text style={styles.bookText}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.packageCard}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Package Card Screen',
                'Welcome to Diagnostic Packages!',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Package Card OK Pressed'),
                  },
                ],
              );
            }}>
            <View style={styles.offerCardEven}>
              <Text style={styles.type}>ADVANCED</Text>
              <Text style={styles.titleSingle}>FeverPackage 3</Text>
              <Text style={styles.testsNumber}>66 tests included</Text>
            </View>
            <View style={styles.priceCard}>
              <Text style={styles.actualPrice}>₹ 3300.00</Text>
              <Text style={styles.dash}>___________</Text>
              <View style={styles.price}>
                <Text style={styles.discountedPrice}>₹ 1299.00</Text>
                <Text style={styles.discount}>61% off</Text>
              </View>
              <Text style={styles.bookText}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  packageTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
  viewText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'orange',
  },
  packageCard: {
    width: 210,
    height: 280,
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  offerCardOdd: {
    backgroundColor: '#ecdfec',
    flexWrap: 'wrap',
    height: 140,
    width: 210,
  },
  priceCard: {
    backgroundColor: 'white',
    //flexWrap: 'wrap',
    height: 140,
    width: 210,
  },
  offerCardEven: {
    backgroundColor: '#e6e6fa',
    height: 140,
    width: 210,
  },
  type: {
    fontSize: 16,
    fontWeight: '700',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 10,
  },
  titleSingle: {
    //alignSelf: 'center',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  titleDouble: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  testsNumber: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 15,
    color: 'grey',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  actualPrice: {
    padding: 10,
    paddingTop: 15,
    fontSize: 17,
    color: 'darkgrey',
    fontWeight: '600',
  },
  dash: {
    justifyContent: 'center',
    position: 'absolute',
    top: 13,
    left: 0,
    paddingLeft: 10,
  },
  discountedPrice: {
    padding: 10,
    paddingTop: 10,
    fontSize: 20,
    color: '#659d32',
    fontWeight: '700',
  },
  discount: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: '#659d32',
    fontWeight: '700',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 2,
    borderColor: '#659d32',
    alignSelf: 'center',
  },
  bookText: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'orange',
  },
});

export default Packages;
