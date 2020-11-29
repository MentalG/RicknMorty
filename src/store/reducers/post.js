import { createReducer } from '@reduxjs/toolkit';

import { getPostRequest, getPostSuccess } from '../actions/post';

const initialState = {
    data: {},
    isLoading: false,
}

export default createReducer(initialState, {
    [getPostRequest]: (state) => {
        state.isLoading = true
    },
    [getPostSuccess]: (state, { payload }) => {
        state.data = {...payload}
        state.isLoading = false
    }
})