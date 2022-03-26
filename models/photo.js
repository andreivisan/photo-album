'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Folder }) {
      // define association here
      this.belongsTo(Folder, { foreignKey: 'folder_id', as: 'folder' })
    }

    toJSON() {
      return {...this.get(), id: undefined}
    }
  }
  Photo.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    camera: DataTypes.STRING,
    file_size: DataTypes.STRING,
    resolution: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'photo',
    modelName: 'Photo',
  });
  return Photo;
};