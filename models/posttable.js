'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class postTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.likestable, { foreignKey: 'postId', as: 'Total number of likes' })
      this.hasMany(models.commenttable, { foreignKey: 'postId', as: 'Total number of comments' })
    }
  }

  const { v4: uuidv4 } = require('uuid')

  postTable.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: uuidv4 },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      email: DataTypes.STRING,
      author: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'postTable',
    }
  )
  return postTable
}
