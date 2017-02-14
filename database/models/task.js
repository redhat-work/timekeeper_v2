/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    id_task: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_project: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    task_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'task',
    "timestamps": false
  });
};
