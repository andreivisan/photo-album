'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('folder', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parent: {
        type: Sequelize.UUID
      },
      notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('folder');
  }
};