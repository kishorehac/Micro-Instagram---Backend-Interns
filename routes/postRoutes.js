const express = require('express');
const { Post, User } = require('../models');

const router = express.Router();

// Create a post for a user
router.post('/:userId', async (req, res) => {
  try {
    const { title, description, images } = req.body;
    const user = await User.findByPk(req.params.userId);

    if (!user) return res.status(404).json({ error: 'User not found' });

    const post = await Post.create({ title, description, images, userId: user.id });
    await user.increment('postCount');

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the post' });
  }
});

// Edit a post of a user
router.put('/:postId', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    await post.update(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the post' });
  }
});

// Delete a post of a user
router.delete('/:postId', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const user = await User.findByPk(post.userId);
    await post.destroy();
    await user.decrement('postCount');
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the post' });
  }
});

module.exports = router;
