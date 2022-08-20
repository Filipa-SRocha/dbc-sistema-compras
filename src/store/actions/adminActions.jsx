import { api } from '../../api';
import nProgress from 'nprogress';

export const listAllUsers = async (dispatch) => {
  const token = localStorage.getItem('token');

  if(token) {
    api.defaults.headers.common['Authorization'] = token;

    const { data } = await api.get('/admin/list');

    const usersList = {
      type: 'GET_USERS_LIST',
      list: data,
    }

    dispatch(usersList);
  }
}

export const editUserRole = async (dispatch) => {
  const token = localStorage.getItem('token');

  if(token) {
    await api.post('/admin/usuario/')
  }
}