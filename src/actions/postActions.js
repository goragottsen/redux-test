import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
    // Dispatch is like a resolver in a promise
    // Whenever we want to send data we call dispatch
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=> res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }))
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
}
