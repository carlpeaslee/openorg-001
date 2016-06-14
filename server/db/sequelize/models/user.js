import Promise from 'bluebird';
import bcryptNode from 'bcrypt-nodejs';
const bcrypt = Promise.promisifyAll(bcryptNode);

// Other oauthtypes to be added

/* eslint-disable no-param-reassign */
function hashPassword(user) {
  if (!user.changed('password')) return null;
  return bcrypt.genSaltAsync(5).then((salt) =>
    bcrypt.hashAsync(user.password, salt, null).then((hash) => {
      user.password = hash;
    })
  );
}
/* eslint-enable no-param-reassign */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    },
    first_name: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    last_name: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('NOW')
    },
    last_login: {
      last_login: DataTypes.DATE,
      defaultValue: ''
    },
    resetPasswordToken: {
      type: DataTypes.STRING
    },
    resetPasswordExpires: {
      type: DataTypes.DATE
    },
    google: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,

    classMethods: {
      associate(models) {
        User.hasMany(models.Token, {
          foreignKey: 'user_id'
        });
      }
    },

    instanceMethods: {
      comparePassword(candidatePassword) {
        return bcrypt.compareAsync(candidatePassword, this.password);
      },

      toJSON() {
        return {
          user_id: this.user_id,
          email: this.email,
          profile: {
            first_name: this.first_name,
            last_name: this.last_name,
            gender: this.gender
          }
        };
      }
    }
  });

  User.beforeCreate(hashPassword);
  User.beforeUpdate(hashPassword);

  return User;
};
