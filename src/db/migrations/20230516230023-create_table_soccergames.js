'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('soccergames', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      team1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
      },
      team2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
      },
      score1: Sequelize.INTEGER,
      score2: Sequelize.INTEGER,
      odd1: Sequelize.FLOAT,
      oddx: Sequelize.FLOAT,
      odd2: Sequelize.FLOAT,
      winner: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
      },
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
    return await queryInterface.dropTable('soccergames')
  }
};
