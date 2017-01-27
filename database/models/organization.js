/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization', {
    id_org: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(seq_organization::regclass)",
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
    tableName: 'organization'
  });
};
