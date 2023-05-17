'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      color1: Sequelize.STRING,
      color2: Sequelize.STRING,
      w: Sequelize.INTEGER,
      x: Sequelize.INTEGER,
      l: Sequelize.INTEGER,
      power: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('teams')
  }
};
