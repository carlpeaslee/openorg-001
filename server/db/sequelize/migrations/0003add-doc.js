module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'doc', {
        doc_id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        abstract: {
          type: DataTypes.STRING,
          allowNull: false
        },
        text: {
          type: DataTypes.TEXT
        },
        location: {
          type: DataTypes.STRING
        },
        type: {
          type: DataTypes.STRING
        },
        creator: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'user_id'
          }
        },
        associated_org: {
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
    return queryInterface.dropTable('doc');
  }
};
