/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id_role: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    short_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'role',
    "timestamps": false
  });
};
