import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
  Modal,
} from 'react-native';
//import request from '../services/Api';
import FilterModal from './FilterModal';
import MovieRow from './MovieRow';
import {connect} from 'react-redux';
import {
  requestMoviesList,
  setIsLoading,
  handleFilter,
} from '../services/actions';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        numColumns: 1,
        keyGrid: 1,
      },
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.props.requestMoviesList(
      this.props.page,
      'popularity.desc',
      'Most Popular',
    );
  }

  handleFilterModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  changeModalVisible = (bool) => {
    this.setState({isModalVisible: bool});
  };

  handleSwitchMovie = async (newFilter) => {
    if (newFilter.type !== this.props.filterType) {
      this.props.handleFilter(newFilter);

      await this.props.requestMoviesList(1, newFilter.type, newFilter.name);
    }
  };

  handleGrid = () => {
    this.setState({
      view: {
        numColumns: this.state.view.numColumns === 1 ? 2 : 1,
        keyGrid: this.state.view.keyGrid + 1,
      },
    });
  };

  renderFooter = () => {
    return <ActivityIndicator animating={this.props.isLoading} />;
  };

  endReached = () => {
    this.props.setIsLoading(true);

    this.props.requestMoviesList(
      this.props.page + 1,
      this.props.filterType,
      this.props.filterName,
    );
  };

  renderItem = ({item}) => {
    return (
      <MovieRow
        item={item}
        type="normal"
        numColumns={this.state.view.numColumns}
      />
    );
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.safeareaview} />

        <View style={styles.conatiner}>
          <Text style={styles.headerText}>Home</Text>
          <TouchableOpacity onPress={this.handleFilterModal}>
            <Image
              style={styles.filterIcon}
              source={require('../../assets/filterIcon.png')}
            />
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType={'slide'}
            visible={this.state.isModalVisible}
            onRequestClose={this.handleFilterModal}>
            <FilterModal
              changeModalVisible={this.changeModalVisible}
              //   filter={filter1}
              filterType={this.props.filterType}
              filterName={this.props.filterName}
              onFilter={this.handleSwitchMovie}
            />
          </Modal>
        </View>

        {this.props.isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.bodyContainer}>
            {this.props.data.length > 0 && (
              <View style={styles.headerView}>
                <Text style={styles.bodyHeaderText}>
                  {this.props.filterName}
                </Text>
                <TouchableOpacity onPress={this.handleGrid}>
                  <Image
                    style={styles.gridIcon}
                    source={require('../../assets/gridIcon.png')}
                  />
                </TouchableOpacity>
              </View>
            )}

            <FlatList
              data={this.props.data}
              key={this.state.view.keyGrid}
              numColumns={this.state.view.numColumns}
              keyExtractor={(item) => item.id.toString()}
              ListFooterComponent={this.renderFooter}
              renderItem={this.renderItem}
              onEndReached={this.endReached}
            />
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: 'black',
  },
  conatiner: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: 'black',
    borderBottomColor: 'dimgrey',
    borderBottomWidth: 1,
    shadowColor: 'dimgrey',
    elevation: 4,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  headerText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '500',
  },
  filterIcon: {
    width: 26,
    height: 26,
    tintColor: 'white',
    //tintColor: 'black',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerView: {
    width: '100%',
    height: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  bodyHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  gridIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
    //tintColor: 'black',
  },
  loadingMore: {
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingButton: {
    padding: 10,
    width: '50%',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'lightgrey',
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.creducer.isLoading,
    // isLoadingMore: state.creducer.isLoadingMore,
    data: state.creducer.data,
    // totalPages: state.creducer.totalPages,
    page: state.creducer.page,
    filterType: state.creducer.filterType,
    filterName: state.creducer.filterName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestMoviesList: (resetPage, page, sort_by, filter) =>
      dispatch(requestMoviesList(resetPage, page, sort_by, filter)),
    setIsLoading: (boolVal) => dispatch(setIsLoading(boolVal)),
    handleFilter: (filter) => dispatch(handleFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
