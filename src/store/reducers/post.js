import { createReducer } from '@reduxjs/toolkit';

import { getPostRequest, getPostSuccess, getPostFailure } from '../actions/post';

const initialState = {
    posts: [],
    isLoading: false,
    error: ''
}

export default createReducer(initialState, {
    [getPostRequest]: (state) => {
        state.isLoading = true
    },
    [getPostSuccess]: (state, { payload }) => {
        state.posts = [...payload]
        state.isLoading = false
    },
    [getPostFailure]: (state) => {
        state.isLoading = false
        state.error = state
    }
})