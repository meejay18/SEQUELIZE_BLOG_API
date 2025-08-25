'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('likestables', 'likescount')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('likestables', 'likescount', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
  },
}
