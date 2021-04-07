import {key, get_data, isLoading, setFilter} from './constant';

export const requestMoviesList = (pageNumber, filterType, filterName) => async (
  dispatch,
) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${filterType}&page=${pageNumber}`,
    );
    const result = await response.json();
    dispatch({
      type: get_data,
      data: result.results,
      page: pageNumber,
      filterType: filterType,
      filterName: filterName,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setIsLoading = (boolVal) => {
  return {
    type: isLoading,
    boolVal,
  };
};

export const handleFilter = (filter) => {
  return {
    type: setFilter,
    filterType: filter.type,
    filterName: filter.name,
  };
};
