/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timecard', {
    id_timecard: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_consultant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'id_person'
      }
    },
    id_project: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'project',
        key: 'id_project'
      }
    },
    comment_consultant: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comment_pm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    on_pa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'timecard',
    "timestamps": false
  });
};
