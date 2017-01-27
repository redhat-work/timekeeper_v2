/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    id_project: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_pm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'person',
        key: 'id_person'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    initial_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_modification: {
      type: DataTypes.TIME,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pa_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    registration_date: {
      type: DataTypes.TIME,
      allowNull: true
    },
    use_pm_substitute: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'project',
    "timestamps": false
  });
};
