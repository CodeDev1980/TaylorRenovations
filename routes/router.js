const router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const contactController = require('../controllers/contactPage');
const sendMailController = require('../controllers/sendMail');
// User DB
const registerController = require('../controllers/register');
const storeUserController = require('../controllers/StoreUser');
const profileController = require('../controllers/profilePage');
const loginController = require('../controllers/login');
const loginUserController = require('../controllers/loginUser');
const logoutUserController = require('../controllers/logout');
const deleteUserController = require('../controllers/deleteUser');
// Blogs
const newPostController = require('../controllers/newPost');
const storePostController = require('../controllers/StorePost');
const blogsController = require('../controllers/blogsPage');
const postController = require('../controllers/singlePost');
const deletePostController = require('../controllers/deletePost');

// MiddleWare
const auth = require('../middlewares/ifAuthorized');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
router.post('/send/mail', sendMailController);
// User DB
router.get('/register', registerController);
router.post('/store/user', storeUserController);
router.get('/profile/:id', profileController)
router.get('/login', loginController);
router.post('/login/user', loginUserController);
router.get('/logout', logoutUserController);
router.get('/delete/user/:id', deleteUserController);
// blogs
router.get('/create', auth, newPostController);
router.post('/store/post', auth, storePostController);
router.get('/blogs', blogsController);
router.get('/post/:id', postController);
router.get('/delete/post/:id', auth, deletePostController);

module.exports = router;