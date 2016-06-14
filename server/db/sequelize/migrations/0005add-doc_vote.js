module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'doc_vote', {
        doc_vote_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        voted_to_approve: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        voted_to_reject: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        options: {
          type: DataTypes.STRING
        },
        vote_type: {
          type: DataTypes.STRING
        },
        voter_id: {
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
        date_cast: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.fn('NOW')
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('doc_vote');
  }
};
