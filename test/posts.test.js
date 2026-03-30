const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../src/clients/postsApi');

describe('JSONPlaceholder API /posts', () => {
  test('GET /post', async () => {
    const response = await getAllPosts();

    expect(response.status).toBe(200);
    expect(response.data.length).toBe(100);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('title');
  });

  test('GET /post/id', async () => {
    const response = await getPostById(1);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
  });

  test('POST /post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const response = await createPost(newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test('PUT /post/id', async () => {
    const updatedPost = {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    };

    const response = await updatePost(1, updatedPost);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data.title).toBe(updatedPost.title);
    expect(response.data.body).toBe(updatedPost.body);
    expect(response.data.userId).toBe(updatedPost.userId);
  });

  test('DELETE /post/id', async () => {
    const response = await deletePost(1);

    expect(response.status).toBe(200);
  });
});
