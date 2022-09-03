import { FETCH_ALL_CATEGORY} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();

    dispatch({ type: FETCH_ALL_CATEGORY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};