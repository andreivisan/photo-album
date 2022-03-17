'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Photo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      folder_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Folder',
          key: 'id'
        }
      },
      camera: {
        type: Sequelize.STRING
      },
      file_size: {
        type: Sequelize.STRING
      },
      resolution: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Photo');
  }
};