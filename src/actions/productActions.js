import * as types from './actionTypes';
import axios from 'axios-es6';
import baseUrl from '../configuration/api';

function loadProductsSuccess(products) {
    return {
        type: types.LOAD_PRODUCTS_SUCCESS,
        products: products
    };
}

export function loadAllProducts() {
    let config = {
        method: 'get',
        url: baseUrl + '/api/products',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return function(dispatch) {
        return axios(config).then(function(res) {
            dispatch(loadProductsSuccess(res.data));
        });
    };
}
