const User = require('./user');
const Post = require('./post');
const Kitchen = require('./kitchen')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Kitchen.hasMany(Post,{
    foreignKey: 'post_id',
});

module.exports = { User, Post, Kitchen };
