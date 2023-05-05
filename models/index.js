const User = require('./user');
const Post = require('./post');

User.hasMany(Post, {
  foreignKey: 'userPost_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Post, };
