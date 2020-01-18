const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const { getUserList ,getUserById ,
    createUser,updateUser,deleteUser ,login
      } = require('../controller/user.js');

router.get('/',getUserList);
router.get('/:id',getUserById);
router.post('/',createUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser );
router.post('/login', login);

module.exports = router 