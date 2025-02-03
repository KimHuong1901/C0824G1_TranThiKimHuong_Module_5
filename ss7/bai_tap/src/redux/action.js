export const GET_USER = 'GET_USER';
export const DELETE_USER = 'DELETE_USER';
export const getAllUsers = () => ({type: GET_USER});
export const deleteUser = (id) => dispatch => ({type: DELETE_USER, payload: id});