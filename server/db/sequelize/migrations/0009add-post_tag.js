module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'post_tag', {
        post_tag_id: {
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
        post_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'post',
            key: 'post_id'
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
    return queryInterface.dropTable('post_tag');
  }
};
