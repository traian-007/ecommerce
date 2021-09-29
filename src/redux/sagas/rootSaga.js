import {takeLatest} from "redux-saga/effects";
import { handleGetProduct } from "./handlers/product";
import { SET_PRODUCTS} from '../../redux/types';

export default function* watcherSaga() {
    yield takeLatest(SET_PRODUCTS, handleGetProduct)
}