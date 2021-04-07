import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import Language from '../../data/lang.json';
import Genres from '../../data/genres.json';

export default class MovieRow extends Component {
  onPressAlertEvent = () => {
    Alert.alert('Screen Clicked', 'Welcome!', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  getImageApi = (path, key = 'uri', width = 'w200') => {
    const res_path = path
      ? {[key]: `https://image.tmdb.org/t/p/w500${path}`}
      : '';
    return res_path;
  };

  convertToYear = (date) => new Date(date).getFullYear() || '';

  renderDivider = (releaseDate, originalLanguage) =>
    releaseDate && originalLanguage !== 'xx' ? (
      <Text style={styles.trace}>|</Text>
    ) : null;

  getLanguage = (value) => {
    const str = Language[value] || '';

    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  convertTypeWithGenre = (arr, type) => {
    if (type === 'normal') {
      if (arr.length > 1) {
        return `${Genres[arr[0]].name}, ${Genres[arr[1]].name}`;
      }
      return arr.length !== 0 ? `${Genres[arr[0]].name}` : '';
    }

    return arr.length !== 0 && type !== Genres[arr[0]].name
      ? `${type}, ${Genres[arr[0]].name}`
      : type;
  };

  renderScore = (voteAverage) => {
    const color1 =
      voteAverage < 5
        ? 'low'
        : voteAverage >= 5 && voteAverage < 7
        ? 'mid'
        : 'high';

    return (
      <View style={[styles.score, styles[color1]]}>
        <Text style={styles.textPercent}>{voteAverage}</Text>
      </View>
    );
  };

  render() {
    const {item, type, numColumns} = this.props;

    return (
      <>
        {numColumns === 1 ? (
          <TouchableOpacity onPress={this.onPressAlertEvent}>
            <View style={styles.containerItem}>
              <Image
                accessibilityRole="imagebutton"
                accessibilityLabel={`${item.title} image`}
                source={this.getImageApi(item.poster_path)}
                style={styles.photo}
              />
              <View style={styles.item}>
                <View>
                  <Text numberOfLines={2} style={styles.textTitle}>
                    {item.title}
                  </Text>
                  <View style={[styles.textRow, styles.containerSubTitle]}>
                    <Text style={styles.textSmall}>
                      {this.convertToYear(item.release_date)}
                    </Text>
                    {this.renderDivider(
                      item.release_date,
                      item.original_language,
                    )}
                    <Text numberOfLines={1} style={styles.textSmall}>
                      {this.getLanguage(item.original_language)}
                    </Text>
                  </View>
                  <Text numberOfLines={1} style={styles.textSmall}>
                    {this.convertTypeWithGenre(item.genre_ids, type)}
                  </Text>
                </View>
                <View style={[styles.textRow, styles.containerReview]}>
                  {this.renderScore(item.vote_average)}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={this.onPressAlertEvent}
            style={styles.containerTwoItem}>
            <View>
              <Image
                accessibilityRole="imagebutton"
                accessibilityLabel={`${item.title} image`}
                source={this.getImageApi(item.poster_path)}
                style={styles.photo}
              />
            </View>
            <Text numberOfLines={2} style={styles.textTwoTitle}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  containerTwoItem: {
    paddingTop: 10,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  photo: {
    borderRadius: 8,
    height: 250,
    width: 160,
  },
  item: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  textTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  textTwoTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    padding: 20,
  },
  textRow: {
    flexDirection: 'row',
  },
  containerSubTitle: {
    marginVertical: 3,
    paddingVertical: 3,
  },
  containerReview: {
    justifyContent: 'space-between',
    marginRight: 20,
  },
  textSmall: {
    fontSize: 14,
    color: 'white',
  },
  trace: {
    marginHorizontal: 5,
    fontSize: 15,
    color: 'white',
  },
  score: {
    width: '30%',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 100,
  },
  low: {
    backgroundColor: 'red',
  },
  mid: {
    backgroundColor: 'goldenrod',
  },
  high: {
    backgroundColor: 'green',
  },
  textPercent: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
