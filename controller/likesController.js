const { likestable } = require('../models')
exports.createLikes = async (req, res) => {
  const { postId } = req.params
  const { email } = req.body

  try {
    const checkLike = await likestable.findOne({ where: { postId, email } })
    if (checkLike) {
      await checkLike.destroy()
      return res.status(500).json({
        message: 'You unliked this post',
      })
    }

    const newLike = await likestable.create({ postId, email })
    return res.status(201).json({
      message: 'You liked this post',
      date: newLike,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating likes',
      error: error.message,
    })
  }
}

exports.calculateLikes = async (req, res) => {
  const { postId } = req.params
  try {
    const calculation = await likestable.count({ where: { postId } })
    return res.status(200).json({
      message: 'likes calculated',
      data: `${calculation} people liked this post`,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error calculating likes',
      error: error.message,
    })
  }
}
