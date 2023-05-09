const User = require('../models/user');
const Post = require('../models/post');

const resolvers = {
  getUser: async ({ id }) => {
    const user = await User.findById(id);
    return user;
  },
  getAllUsers: async () => {
    return await User.find();
  },
  getPost: async ({ id }) => {
    return await Post.findById(id);
  },
  getAllPosts: async () => {
    const posts = await Post.find();
    return posts;
  },
  createUser: async ({ name, email }) => {
    const user = new User({ name, email });
    await user.save();
    return user;
  },
  createPost: async ({ title, content, author }) => {
    const post = new Post({ title, content, author });
    await post.save();
    return post;
  },
};

module.exports = resolvers;
