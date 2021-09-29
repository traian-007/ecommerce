import {call, put} from 'redux-saga/effects';
import { getProduct } from '../../ducks/products';
import { requestProducts } from '../requests/product';

export function* handleGetProduct(action){
    try {
        const response = yield call(requestProducts);
        const ab = response;
        yield put(getProduct(ab))
    } catch (error) {
        console.log(error)
    }
}