module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'post', {
        post_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        content: {
          type: DataTypes.TEXT
        },
        creator_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'user_id'
          }
        },
        thread_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'thread',
            key: 'thread_id'
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
    return queryInterface.dropTable('post');
  }
};
