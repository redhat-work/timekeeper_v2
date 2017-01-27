/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person_task', {
    id_person: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'id_person'
      }
    },
    id_task: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'task',
        key: 'id_task'
      }
    }
  }, {
    tableName: 'person_task'
  });
};
