'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('likestables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      postId: {
        type: Sequelize.UUID,
        references: { model: 'postTables', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      likescount: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('likestables')
  },
}
