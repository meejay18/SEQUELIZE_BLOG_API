const { postTable } = require('../models')
const { commenttable } = require('../models')
const { likestable } = require('../models')

exports.createPost = async (req, res) => {
  const data = req.body
  try {
    const newPost = await postTable.create(data)

    return res.status(201).json({
      message: 'Post created successfully',
      data: newPost,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating post',
      error: error.message,
    })
  }
}

exports.updatePost = async (req, res) => {
  const { postId } = req.params
  const { email, ...others } = req.body
  try {
    const findPost = await postTable.findByPk(postId)
    if (!findPost) {
      return res.status(404).json({
        message: 'Post not found',
      })
    }

    if (email !== findPost.email) {
      return res.status(400).json({
        message: 'You cannot update this post',
      })
    }

    const updatedPost = await findPost.update({ ...others })
    return res.status(200).json({
      message: 'post updated successfully',
      data: updatedPost,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating post',
      error: error.message,
    })
  }
}
exports.deletePost = async (req, res) => {
  const { postId } = req.params

  try {
    const findPost = await postTable.findByPk(postId)
    if (!findPost) {
      return res.status(404).json({
        message: 'Post not found',
      })
    }

    const deletedPost = await findPost.destroy(postId)
    return res.status(200).json({
      message: 'post deleted successfully',
      data: deletedPost,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting post',
      error: error.message,
    })
  }
}

exports.getAllPosts = async (req, res) => {
  try {
    const data = await postTable.findAll({
      include: [
        { model: likestable, as: 'Total number of likes' },
        { model: commenttable, as: 'Total number of comments' },
      ],
    })
    return res.status(200).json({
      message: 'info retrieved successfully',
      data: data,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error',
      error: error.message,
    })
  }
}
