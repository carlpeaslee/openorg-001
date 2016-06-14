module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'user', {
        user_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        google: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        first_name: {
          type: DataTypes.STRING
        },
        last_name: {
          type: DataTypes.STRING
        },
        gender: {
          type: DataTypes.STRING
        },
        date_created: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.fn('NOW')
        },
        last_login: {
          type: DataTypes.DATE
        },
        resetPasswordToken: {
          type: DataTypes.STRING
        },
        resetPasswordExpires: {
          type: DataTypes.DATE
        }
      }
    ).then(() =>
      queryInterface.addIndex(
        'user',
        [DataTypes.fn('lower', DataTypes.col('email'))],
        {
          indexName: 'user_email',
          indicesType: 'unique'
        }
      )
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('user');
  }
};
