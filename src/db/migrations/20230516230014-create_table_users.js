'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      email: Sequelize.STRING,
      points: Sequelize.INTEGER,
      wins: Sequelize.INTEGER,
      role: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('users')
  }
};
