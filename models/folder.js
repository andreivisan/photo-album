'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Photo }) {
      // define association here
      this.hasMany(Photo, { foreignKey: 'folder_id', as: 'photos' })
    }

    toJSON() {
      return {...this.get(), id: undefined}
    }
  }
  Folder.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    parent: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'folder',
    modelName: 'Folder',
  });
  return Folder;
};