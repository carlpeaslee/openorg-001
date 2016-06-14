module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'thread', {
        thread_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING
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
        doc_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'doc',
            key: 'doc_id'
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
    return queryInterface.dropTable('thread');
  }
};
