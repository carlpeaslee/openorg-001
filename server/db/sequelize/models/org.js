export default (sequelize, DataTypes) =>
  sequelize.define('org', {
    org_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    date_created: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    timestamps: false,
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
  }
});
