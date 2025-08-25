const { commenttable } = require('../models')

exports.createComment = async (req, res) => {
  const { email, comments } = req.body
  const { postId } = req.params

  try {
    const newComment = await commenttable.create({ postId, comments, email })

    return res.status(201).json({
      message: 'comment created successfully',
      data: newComment,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating comment',
      error: error.message,
    })
  }
}
exports.updateComment = async (req, res) => {
  const data = req.body
  const { commentId } = req.params

  try {
    const findComment = await commenttable.findByPk(commentId)
    if (!findComment) {
      return res.status(404).json({
        message: 'comment not found',
      })
    }
    const updatedComment = await findComment.update(data)
    return res.status(200).json({
      message: 'comment updated successfully',
      data: updatedComment,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating comment',
      error: error.message,
    })
  }
}

exports.deleteComment = async (req, res) => {
  const { commentId } = req.params

  try {
    const findComment = await commenttable.findByPk(commentId)
    if (!findComment) {
      return res.status(404).json({
        message: 'comment not found',
      })
    }
    const deletedComment = await findComment.destroy()
    return res.status(200).json({
      message: 'comment deleted successfully',
      data: deletedComment,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting comment',
      error: error.message,
    })
  }
}

exports.getAllComment = async (req, res) => {
  try {
    const comments = await commenttable.findAll({ include: 'all posts' })
    return res.status(200).json({
      message: 'successfull',
      data: comments,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error getting comments',
      error: error.message,
    })
  }
}
