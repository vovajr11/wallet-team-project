import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

const token = {
    set(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common['Authorization'] = '';
    },
};

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    axios
        .post('/auth/sign-up', credentials)

        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.registerSuccess(response.data));
        })
        .catch(error => dispatch(authActions.registerError(error)));
};

export default {
    register,
};
