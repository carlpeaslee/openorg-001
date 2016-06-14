module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'doc_signature', {
        doc_signature_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        options: {
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
        date_signed: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.fn('NOW')
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('doc_signature');
  }
};
