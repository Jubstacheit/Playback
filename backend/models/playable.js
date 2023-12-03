const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playable', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'platform',
        key: 'id'
      }
    },
    id_game: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'game',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'playable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "id_game" },
        ]
      },
      {
        name: "Playable_game0_FK",
        using: "BTREE",
        fields: [
          { name: "id_game" },
        ]
      },
    ]
  });
};
