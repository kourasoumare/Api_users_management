import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import authenticate from '../middlewares/authenticate.js';
const router = Router();

router.get("/users", authenticate, userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export default router;