module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'org', {
        org_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        url: {
          type: DataTypes.STRING
        },
        status: {
          type: DataTypes.STRING
        },
        description: {
          type: DataTypes.STRING
        },
        creator: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'user_id'
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
