const User = require('./user');
const Post = require('./post');

User.hasMany(Post, {
  foreignKey: 'userPost_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userPost_id',
  targetKey: "id"
});


module.exports = { User, Post, };
