'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('bets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'soccergames',
          key: 'id'
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      betOdd: Sequelize.FLOAT,
      total_stake: Sequelize.FLOAT,
      potential_return: Sequelize.FLOAT,
      winner: Sequelize.INTEGER,
      done: Sequelize.BOOLEAN,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('bets')
  }
};
