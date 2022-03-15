import { combineReducers } from 'redux';

export default combineReducers(
    {
        posts: getPosts
    }
);

function getPosts(posts = [], action) {
    if (action.type === 'GET_POSTS') {
        return action.payload;
    }
    return posts;
}