import React, {Component} from 'react';
import {Switch, View, Text, StyleSheet} from 'react-native';

export default class FilterModalItem extends Component {
  render() {
    const {title, type, selected, onChange} = this.props;
    return (
      <View style={styles.containerRow}>
        <Text style={styles.optionTitle}>{title}</Text>
        <Switch
          value={type === selected}
          onValueChange={() => onChange(type, title)}
          trackColor={{false: 'white', true: 'white'}}
          thumbColor={type === selected ? 'green' : 'white'}
          ios_backgroundColor="lightgrey"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    paddingHorizontal: 10,
  },
  optionTitle: {
    fontSize: 16,
    color: 'white',
    width: '80%',
  },
});
