const router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const contactController = require('../controllers/contactPage');
// User DB
const registerController = require('../controllers/register');
const storeUserController = require('../controllers/StoreUser');
const profileController = require('../controllers/profilePage');
const loginController = require('../controllers/login');
const loginUserController = require('../controllers/loginUser');
const logoutUserController = require('../controllers/logout');
const deleteUserController = require('../controllers/deleteUser');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
// User DB
router.get('/register', registerController);
router.post('/store/user', storeUserController);
router.get('/profile/:id', profileController)
router.get('/login', loginController);
router.post('/login/user', loginUserController);
router.get('/logout', logoutUserController);
router.get('/delete/user/:id', deleteUserController);

module.exports = router;