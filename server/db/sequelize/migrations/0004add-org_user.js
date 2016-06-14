module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'org_user', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        stakeholder: {
          type: DataTypes.BOOLEAN
        },
        status: {
          type: DataTypes.STRING
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'user_id'
          }
        },
        org_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'org',
            key: 'org_id'
          }
        },
        date_created: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.fn('NOW')
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('org');
  }
};
