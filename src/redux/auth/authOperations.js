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
        .then(({ data }) => {
            token.set(data.token);
            dispatch(authActions.registerSuccess(data));
        })
        .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    axios
        .post('/auth/sign-in', credentials)
        .then(({ data }) => {
            token.set(data.token);
            dispatch(authActions.loginSuccess(data));
        })
        .catch(error => dispatch(authActions.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
    const {
        session: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());

    axios
        .get('/users/current')
        .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
        .catch(error => authActions.getCurrentUserError(error));
};

export default {
    register,
    logIn,
    getCurrentUser,
};
