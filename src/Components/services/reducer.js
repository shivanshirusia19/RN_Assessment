import {get_data, isLoading, setFilter} from './constant';

const initialState = {
  isLoading: true,
  //isLoadingMore: true,
  //isRefresh: false,
  data: [],
  //   totalPages: 0,
  page: 1,
  filterType: '',
  filterName: 'Most Popular',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case get_data:
      return {
        ...state,
        data: action.page === 1 ? action.data : [...state.data, ...action.data],
        page: action.page,
        filterType: action.filterType,
        filterName: action.filterName,
        isLoading: false,
      };
    case isLoading:
      return {...state, isLoading: action.boolVal};
    case setFilter:
      return {
        ...state,
        filterType: action.filterType,
        filterName: action.filterName,
        data: [],
      };
    default:
      return state;
  }
}
