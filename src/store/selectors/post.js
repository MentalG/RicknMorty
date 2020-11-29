import { createSelector } from 'reselect'

export const getPosts = state => state.post;

export const getPostsData = createSelector(
    getPosts,
    post => post
)