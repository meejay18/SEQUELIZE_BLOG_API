'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('commenttables', 'commentedby')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('commenttables', 'commentedby', {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },
}
