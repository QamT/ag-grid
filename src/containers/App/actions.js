import * as types from './constants';

export const addData = data => ({
  type: types.ADD_DATA,
  data
});

export const updateData = data => ({
  type: types.UPDATE_DATA,
  data
});

export const deleteData = data => ({
  type: types.DELETE_DATA,
  data
});
