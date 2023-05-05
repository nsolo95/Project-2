const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // this will sirialize
    const post = postData.map((post) => post.get({ plain: true }));

    // Passing serialized data
    res.render('homepage', { 
      post, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// prevent access to route using withauth
router.get('/profile', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });
    const userPost = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
    const post = userPost.map((post) => post.get({ plain: true }));
    const user = userData.get({ plain: true });
console.log('this is the user', post)
    res.render('profile', {
      ...user,
      post,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // redirects a logged in user
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;