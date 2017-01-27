/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('revinfo', {
    rev: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    revtstmp: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'revinfo'
  });
};
