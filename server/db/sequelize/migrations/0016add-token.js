module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'token', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        kind: {
          type: DataTypes.STRING,
          allowNull: false
        },
        accessToken: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'user_id'
          }
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('token');
  }
};
