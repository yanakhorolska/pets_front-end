import axios from 'axios';

axios.defaults.baseURL = 'https://pets-back-end.vercel.app/api';

const savedToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchNews = async () => {
  const response = await axios.get('/news');
  return response.data.data;
};

/* ===========Запит даних юзера=========== */
export const getCurUserApi = async token => {
  savedToken.set(token);
  const response = await axios.get('/user');
  return response.data.data;
};

export const fetchFriends = () => {
  return axios
    .get('/friends')
    .then(response => response.data.data)
    .catch(error => console.log(error));
};

export const getRegisterApi = async userData => {
  const response = await axios.post('/auth/signup', userData);
  return response.data;
};

export const getLoginApi = async userData => {
  const response = await axios.post('/auth/login', userData);
  savedToken.set(response.data.token);
  return response.data;
};

export const getCheckEmail = async email => {
  const response = await axios.post('/auth/checkemail', email);
  return response.data.check;
};

/* ==============LOGOUT===================== */
export const getLogOutApi = async () => {
  const response = await axios.get('/auth/logout');
  savedToken.unset();
  return response.data;
};

/* ==============Оновлення даних юзера ======== */
export const pathUpdateUserInfoApi = async data => {
  const response = await axios.patch('/user', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data.data;
};

/* ==============Додавання трарин у дані юзера ======== */
export const postPetUserCardApi = async data => {
  const response = await axios.post('/user/pet', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.data;
};

/* ==============Видалення тварин з даних юзера ======== */
export const deltPetUserCardApi = async id => {
  const response = await axios.delete(`/user/pet/${id}`);
  return response.data;
};

export const fetchAdsByCategory = category => {
  return axios
    .get('/notices', { params: { category } })
    .then(response => response.data.data);
};

export const fetchFavoriteAds = () => {
  return axios.get('/notices/favorite').then(response => {
    return response.data.data;
  });
};

export const fetchOwnAds = () => {
  return axios.get('/notices/user').then(response => {
    return response.data.data;
  });
};

export const removeFavoriteAd = id => {
  return axios.delete(`/notices/favorite/${id}`).then(response => {
    return response.data;
  });
};

export const addFavoriteAd = id => {
  return axios.patch(`/notices/favorite/${id}`).then(response => {
    return response.data;
  });
};

export const deleteOwnAd = id => {
  return axios.delete(`/notices/user/${id}`).then(response => {
    return response.data;
  });
};

export const getAdInfo = id => {
  return axios.get(`/notices/${id}`).then(response => {
    return response.data.data;
  });
};

export const addNotice = info => {
  return axios
    .post('notices/user', info, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(response => {
      return response.data.data;
    });
};
