import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', loginRequired, UserController.index); // Listar usuários
// router.get('/:id', UserController.show); // Listar usuário

router.post('/', loginRequired, UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
