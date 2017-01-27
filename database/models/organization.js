/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization', {
    id_org: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    registration_date: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'organization',
    "timestamps": false
  });
};
