import api from '../apis/api';

export function getPosts() {

    // return async function
    return async (dispatch, getState) => {
        const res = await api.get('/posts');
        dispatch(
            {
                type: 'GET_POSTS',
                payload: res.data
            }
        )
    }

    // Don't work
    // const res = await api.get('/posts');
    // return {
    //     type: 'GET_POSTS',
    //     payload: res
    // }
}
