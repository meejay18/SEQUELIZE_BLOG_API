'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class commenttable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  commenttable.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
      comments: DataTypes.STRING,
      email: DataTypes.STRING,
      postId: { type: DataTypes.UUID, references: 'postTables', key: 'id' },
    },
    {
      sequelize,
      modelName: 'commenttable',
    }
  )
  return commenttable
}
