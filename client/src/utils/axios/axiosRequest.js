import axios from 'axios';
import handleError from './axiosError';
import APPCONST from '../../config/constants';

const getHeaders = () => ({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

const getFormHeaders = () => ({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
    }
});

// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = path => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${APPCONST.server_url}${path}`, getHeaders())
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(handleError(error.response));
            });
    });
};

// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (path, data, formdata = false) => {
    let head = formdata ? getFormHeaders() : getHeaders();
    return new Promise((resolve, reject) => {
        axios
            .post(`${APPCONST.server_url}${path}`, data, head)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(handleError(error.response));
            });
    });
};
