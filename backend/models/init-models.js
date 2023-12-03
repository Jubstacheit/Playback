var DataTypes = require("sequelize").DataTypes;
var _classify = require("./classify");
var _comment = require("./comment");
var _contains = require("./contains");
var _game = require("./game");
var _gamecover = require("./gamecover");
var _genre = require("./genre");
var _list = require("./list");
var _platform = require("./platform");
var _playable = require("./playable");
var _rating = require("./rating");
var _user = require("./user");
var _usericon = require("./usericon");

function initModels(sequelize) {
  var classify = _classify(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var contains = _contains(sequelize, DataTypes);
  var game = _game(sequelize, DataTypes);
  var gamecover = _gamecover(sequelize, DataTypes);
  var genre = _genre(sequelize, DataTypes);
  var list = _list(sequelize, DataTypes);
  var platform = _platform(sequelize, DataTypes);
  var playable = _playable(sequelize, DataTypes);
  var rating = _rating(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var usericon = _usericon(sequelize, DataTypes);

  game.belongsToMany(genre, { as: 'id_genre_genres', through: classify, foreignKey: "id", otherKey: "id_genre" });
  game.belongsToMany(list, { as: 'id_lists', through: contains, foreignKey: "id_game", otherKey: "id" });
  game.belongsToMany(platform, { as: 'id_platforms', through: playable, foreignKey: "id_game", otherKey: "id" });
  genre.belongsToMany(game, { as: 'id_games', through: classify, foreignKey: "id_genre", otherKey: "id" });
  list.belongsToMany(game, { as: 'id_game_games', through: contains, foreignKey: "id", otherKey: "id_game" });
  platform.belongsToMany(game, { as: 'id_game_game_playables', through: playable, foreignKey: "id", otherKey: "id_game" });
  classify.belongsTo(game, { as: "id_game", foreignKey: "id"});
  game.hasMany(classify, { as: "classifies", foreignKey: "id"});
  comment.belongsTo(game, { as: "id_game_game", foreignKey: "id_game"});
  game.hasMany(comment, { as: "comments", foreignKey: "id_game"});
  contains.belongsTo(game, { as: "id_game_game", foreignKey: "id_game"});
  game.hasMany(contains, { as: "contains", foreignKey: "id_game"});
  gamecover.belongsTo(game, { as: "id_game_game", foreignKey: "id_game"});
  game.hasMany(gamecover, { as: "gamecovers", foreignKey: "id_game"});
  playable.belongsTo(game, { as: "id_game_game", foreignKey: "id_game"});
  game.hasMany(playable, { as: "playables", foreignKey: "id_game"});
  rating.belongsTo(game, { as: "id_game_game", foreignKey: "id_game"});
  game.hasMany(rating, { as: "ratings", foreignKey: "id_game"});
  classify.belongsTo(genre, { as: "id_genre_genre", foreignKey: "id_genre"});
  genre.hasMany(classify, { as: "classifies", foreignKey: "id_genre"});
  contains.belongsTo(list, { as: "id_list", foreignKey: "id"});
  list.hasMany(contains, { as: "contains", foreignKey: "id"});
  playable.belongsTo(platform, { as: "id_platform", foreignKey: "id"});
  platform.hasMany(playable, { as: "playables", foreignKey: "id"});
  comment.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(comment, { as: "comments", foreignKey: "id_user"});
  list.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(list, { as: "lists", foreignKey: "id_user"});
  rating.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(rating, { as: "ratings", foreignKey: "id_user"});
  usericon.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasOne(usericon, { as: "usericon", foreignKey: "id_user"});

  return {
    classify,
    comment,
    contains,
    game,
    gamecover,
    genre,
    list,
    platform,
    playable,
    rating,
    user,
    usericon,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
