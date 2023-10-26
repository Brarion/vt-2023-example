import { Router } from 'express';

import { UserController } from '@controllers';

const UserRouter = Router();

UserRouter.get('/', UserController.getMe);

export default UserRouter;