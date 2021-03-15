import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

function MedicineCategories() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Medicine Categories</Text>
      <View style={styles.typeContainer}>
        <ScrollView horizontal={true}>
          <View style={styles.typeCard}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Medicine Categories Screen',
                  'Welcome to Healthcare Products!',
                  [
                    {
                      text: 'OK',
                      onPress: () =>
                        console.log('Healthcare Products OK Pressed'),
                    },
                  ],
                );
              }}>
              <Image
                style={styles.typeIcon}
                source={require('../assets/productsIcon.png')}
              />
              <Text style={styles.typeText}>Healthcare</Text>
              <Text style={styles.typeText}>Products</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.typeCard}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Medicine Categories Screen',
                  'Welcome to Ayurveda!',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('Ayurveda OK Pressed'),
                    },
                  ],
                );
              }}>
              <Image
                style={styles.typeIcon}
                source={require('../assets/ayurvedaIcon.png')}
              />
              <Text style={styles.typeText}>Ayurveda</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.typeCard}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Medicine Categories Screen',
                  'Welcome to Homeopathy!',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('Homeopathy OK Pressed'),
                    },
                  ],
                );
              }}>
              <Image
                style={styles.typeIcon}
                source={require('../assets/homeopathyIcon.png')}
              />
              <Text style={styles.typeText}>Homeopathy</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.typeCard}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Medicine Categories Screen',
                  'Welcome to Surgical & Devices!',
                  [
                    {
                      text: 'OK',
                      onPress: () =>
                        console.log('Surgical & Devices OK Pressed'),
                    },
                  ],
                );
              }}>
              <Image
                style={styles.typeIcon}
                source={require('../assets/surgicalIcon.png')}
              />
              <Text style={styles.typeText}>Surgical &</Text>
              <Text style={styles.typeText}>Devices</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  typeContainer: {
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  typeCard: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    margin: 10,
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

export default MedicineCategories;
