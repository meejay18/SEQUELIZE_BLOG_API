'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('postTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.UUID,
      },
      title: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('postTables')
  },
}
