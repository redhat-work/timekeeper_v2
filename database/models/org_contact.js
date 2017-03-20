/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_contact', {
    id_contact: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_org: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'organization',
        key: 'id_org'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telephone: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'org_contact',
    "timestamps": false
  });
};
