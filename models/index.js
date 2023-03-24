const User = require('./User');
const Project = require('./Project');

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

module.exports = { User, Project };
