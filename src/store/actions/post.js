import { createAction } from '@reduxjs/toolkit';
import RicknMortyService from '../../api/services';

const ricknMortyService = new RicknMortyService();

export const getPostRequest = createAction('R:posts/get')
export const getPostSuccess = createAction('S:posts/get')

export function getPosts(query, filters) {
    return async (dispatch) => {
        try {
            dispatch(getPostRequest());
            const response = await ricknMortyService.getAllData(query, filters);

            dispatch(getPostSuccess(response));
        } catch (error) {
            console.log(error);
        }
    }
}