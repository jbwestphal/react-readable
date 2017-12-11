const api = 'http://localhost:3001' || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostDetail = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const removePost = (postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data)

export const createPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post),
  }).then(res => res.json())
    .then(data => data)

export const editPost = (postId, title, body) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers : {
      ...headers,
    },
    title,
    body
  }).then(res => res.json())

export const voteOnPost = (postId, vote) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
    .then(data => data)

export const getCommentsByPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const createComment = (id, body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    id,
    timestamp: Date.now(),
    body: JSON.stringify(body),
    author: JSON.stringify(author),
    parentId: parentId
  }).then(res => res.json())

export const editComment = (commentId, timestamp, body) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers : {
      ...headers,
      'Content-Type': 'application/json'
    },
    timestamp,
    body
  }).then(res => res.json())

export const getCommentSingle = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteOnComment = (commentId, vote) =>
  fetch(`${api}/posts/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    option: vote,
  }).then(res => res.json())

export const removeComment = (postId) =>
  fetch(`${api}/comments/${postId}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data)

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategoriesByPosts = (categoryId) =>
  fetch(`${api}/${categoryId}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)