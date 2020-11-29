import { createAction } from '@reduxjs/toolkit';
import RicknMortyService from '../../api/services';

const ricknMortyService = new RicknMortyService();

export const getPostRequest = createAction('R:posts/get')
export const getPostSuccess = createAction('S:posts/get')
export const getPostFailure = createAction('F:images/get')

export function getPosts() {
    return async (dispatch) => {
        try {
            dispatch(getPostRequest);
            const response = await ricknMortyService.getAllData();

            console.log(response);

            dispatch(getPostSuccess(response));
        } catch (error) {
            console.log(error);
        }
    }
}