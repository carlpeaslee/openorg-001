module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'thread_tag', {
        thread_tag_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        label: {
          type: DataTypes.STRING
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
    return queryInterface.dropTable('thread_tag');
  }
};
