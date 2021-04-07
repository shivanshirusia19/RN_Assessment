import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FilterModalItem from './FilterModalItem';

export default class FilterModal extends Component {
  constructor(props) {
    super(props);
    // const {filter} = this.props;
    const filterType = this.props.filterType;
    const filterName = this.props.filterName;
    this.state = {
      filters: {
        type: filterType,
        name: filterName,
      },
    };
  }
  closeModal = (bool, data) => {
    this.props.changeModalVisible(bool);
  };

  changeValues = (type1, name1) => {
    this.setState({
      filters: {type: type1, name: name1},
    });
    console.log(this.state.filters);
  };

  hanndleButtonClick = () => {
    this.props.onFilter(this.state.filters);
    this.closeModal(false, 'Cancel');
  };

  render() {
    // const {onFilter} = this.props;
    const {type = 'popularity.desc'} = this.state.filters;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Filter</Text>
        </View>
        <ScrollView>
          <View style={styles.containerScroll}>
            <View style={styles.containerSection}>
              <Text style={styles.optionSectionTitle} numberOfLines={2}>
                Date
              </Text>
              <FilterModalItem
                title="Releases"
                type="release_date.desc"
                selected={type}
                onChange={this.changeValues}
              />
              <FilterModalItem
                title="Old"
                type="release_date.asc"
                selected={type}
                onChange={this.changeValues}
              />
            </View>

            <View style={styles.containerSection}>
              <Text style={styles.optionSectionTitle} numberOfLines={2}>
                Popularity
              </Text>
              <FilterModalItem
                title="Most Popular"
                type="popularity.desc"
                selected={type}
                onChange={this.changeValues}
              />
              <FilterModalItem
                title="Less Popular"
                type="popularity.asc"
                selected={type}
                onChange={this.changeValues}
              />
            </View>
            <View style={styles.containerSection}>
              <Text style={styles.optionSectionTitle} numberOfLines={2}>
                Revenue
              </Text>
              <FilterModalItem
                title="Higher Revenue"
                type="revenue.desc"
                selected={type}
                onChange={this.changeValues}
              />
              <FilterModalItem
                title="Lower Revenue"
                type="revenue.asc"
                selected={type}
                onChange={this.changeValues}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.hanndleButtonClick}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '65%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    marginHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 30,
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  containerScroll: {
    padding: 25,
    marginVertical: 25,
  },
  containerSection: {
    marginBottom: 25,
  },
  optionSectionTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
  },
  optionTitle: {
    fontSize: 16,
    color: 'white',
    width: '80%',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 22,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
