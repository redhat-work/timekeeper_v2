/* jshint indent: 2 */
const crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    id_person: {
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
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id_role'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pa_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      set: function(val) {

        var hash = crypto.createHash('sha256')
                  .update(val) 
                  .digest('base64');

        this.setDataValue('password', hash);

      }
    },
    person_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    telephone1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    telephone2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    registration_date: {
      type: DataTypes.TIME,
      allowNull: true
    },
    last_modification: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'person',
    "timestamps": false
  });
};
