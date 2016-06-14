export default (sequelize, DataTypes) => {
  const Token = sequelize.define('token', {
    kind: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accessToken: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    timestamps: false,

    classMethods: {
      associate(models) {
        Token.belongsTo(models.User, {
          foreignKey: 'user_id'
        });
      }
    }
  });

  return Token;
};
