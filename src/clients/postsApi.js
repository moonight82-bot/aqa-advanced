const { apiClient } = require('../utils/axiosinstance');

const getAllPosts = () => apiClient.get('/posts');
const getPostById = (id) => apiClient.get(`/posts/${id}`);
const createPost = (body) => apiClient.post('/posts', body);
const updatePost = (id, postData) => apiClient.put(`/posts/${id}`, postData);
const deletePost = (id) => apiClient.delete(`/posts/${id}`);

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
