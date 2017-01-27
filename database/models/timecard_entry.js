/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timecard_entry', {
    id_timecard_entry: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_task: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'task',
        key: 'id_task'
      }
    },
    id_timecard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'timecard',
        key: 'id_timecard'
      }
    },
    day: {
      type: DataTypes.DATE,
      allowNull: true
    },
    work_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    work_hours: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'timecard_entry',
    "timestamps": false
  });
};
