import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Options() {
  return (
    <View style={styles.typeContainer}>
      <View style={styles.typeCard}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Type Card Screen 2',
              'Welcome to Doctor Appointment!',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('Doctor Consultation OK Pressed'),
                },
              ],
            );
          }}>
          <Image
            style={styles.typeIcon}
            source={require('../assets/stethoscopeIcon.png')}
          />
        </TouchableOpacity>

        <Text style={styles.typeText}>Doctor</Text>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Appointment</Text>
        </View>
      </View>

      <View style={styles.typeCard}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Type Card Screen 2', 'Welcome to Wellness Package!', [
              {
                text: 'OK',
                onPress: () => console.log('Wellness Package OK Pressed'),
              },
            ]);
          }}>
          <Image
            style={styles.typeIcon}
            source={require('../assets/wellnessIcon1.png')}
          />
        </TouchableOpacity>

        <Text style={styles.typeText}>Wellness</Text>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Package</Text>
        </View>
      </View>

      <View style={styles.typeCard}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Type Card Screen 2', 'Welcome to Ask Zoy!', [
              {
                text: 'OK',
                onPress: () => console.log('Ask Zoy OK Pressed'),
              },
            ]);
          }}>
          <Image
            style={styles.typeIcon}
            source={require('../assets/joyIcon.png')}
          />
        </TouchableOpacity>

        <Text style={styles.typeText}>Ask</Text>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Zoy</Text>
        </View>
      </View>

      <View style={styles.typeCard}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Type Card Screen 2', 'Welcome to Home Healthcare!', [
              {
                text: 'OK',
                onPress: () => console.log('Home Healthcare OK Pressed'),
              },
            ]);
          }}>
          <Image
            style={styles.typeIcon}
            source={require('../assets/homeIcon1.png')}
          />
        </TouchableOpacity>

        <Text style={styles.typeText}>Home</Text>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Healthcare</Text>
        </View>
      </View>

      <View style={styles.typeCard}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Type Card Screen 2', 'Welcome to Hospital Packages!', [
              {
                text: 'OK',
                onPress: () => console.log('Hospital Packages OK Pressed'),
              },
            ]);
          }}>
          <Image
            style={styles.typeIcon}
            source={require('../assets/cardboardBoxIcon.png')}
          />
        </TouchableOpacity>

        <Text style={styles.typeText}>Hospital</Text>
        <View style={styles.textContainer}>
          <Text style={styles.typeText}>Packages</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  typeContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 120,
    marginTop: 15,
  },
  typeCard: {
    height: 50,
    width: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderRadius: 25,
    borderColor: 'lightgrey',
    marginTop: 10,
  },
  typeIcon: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  textContainer: {
    flexWrap: 'wrap',
    textAlign: 'center',
    marginLeft: -2,
  },
  typeText: {
    fontSize: 11,
    textAlign: 'center',
  },
});

export default Options;
