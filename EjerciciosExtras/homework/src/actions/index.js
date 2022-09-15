export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

export function getAllPosts() {
    return function(dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(data => dispatch({ type: GET_ALL_POSTS, payload: data }))
    }
};

export function getAllUsers() {
    return function(dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(data => dispatch({ type: GET_ALL_USERS, payload: data }))
    }
};

export function getAllUserPosts(id) {
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(r => r.json())
        .then(data => dispatch({ type: GET_ALL_USERS_POST, payload: data}))
    }
};

export function getAllCommentsPost(id) {
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(r => r.json())
        .then(data => dispatch({ type: GET_ALL_COMMENTS_POST, payload: data}))
    }
};


