import * as APIUtil from '../util/photo_detail_util';
export const RECEIVE_SINGLE_PHOTO = "RECEIVE_SINGLE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";

export const receiveSinglePhoto = (photoDetail) => {
  return ({
    type: RECEIVE_SINGLE_PHOTO,
    photoDetail: photoDetail
  });
};

export const deletePhotoFromState = (photo) => {
  return({
    type: DELETE_PHOTO,
    photo: photo,
  });
};

export const fetchSinglePhoto = (id) => (dispatch) => {
  return APIUtil.fetchSinglePhoto(id)
    .then( (photoDetail) => { return dispatch(receiveSinglePhoto(photoDetail)); });
};

export const uploadPhoto = (photo, callback) => (dispatch) => {
  return APIUtil.uploadPhoto(photo, callback)
    .then( (photo) => { return dispatch(receiveSinglePhoto(photo)); });
};

export const deletePhoto = (id, callback) => (dispatch) => {
  return APIUtil.deletePhoto(id, callback)
    .then( (photo) => { return dispatch(deletePhotoFromState(photo)); });
};
