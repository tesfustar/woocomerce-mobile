import { FETCH_ALL_CATEGORY } from '../constants/actionTypes';

export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORY:
      return action.payload;
    default:
      return categories;
  }
};