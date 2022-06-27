import * as types from "./actionTypes"

const getShoesRequest=()=>{
    return { type: types.GET_SHOES_REQUEST }
}
const getShoesSuccess = (payload) => {
  return { type: types.GET_SHOES_SUCCESS,payload };
};
const getShoesFailure = () => {
  return { type: types.GET_SHOES_FAILURE };
};
const updateShoeCountRequest = () => {
  return { type: types.UPDATE_SHOE_COUNT_REQUEST };
};

const updateShoeCountSuccess = (payload) => {
  return { type: types.UPDATE_SHOE_COUNT_SUCCESS, payload };
};
const updateShoeCountFailure = () => {
  return { type: types.UPDATE_SHOE_COUNT_FAILURE };
};

export {
    getShoesRequest,
    getShoesSuccess,
    getShoesFailure,
    updateShoeCountFailure,
    updateShoeCountSuccess,
    updateShoeCountRequest
}