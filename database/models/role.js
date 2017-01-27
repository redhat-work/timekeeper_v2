/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(seq_role::regclass)",
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
    tableName: 'role'
  });
};
