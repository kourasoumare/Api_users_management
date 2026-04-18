import { Router } from 'express';
import * as movieController from '../controllers/movieController.js';
import authenticate from '../middlewares/authenticate.js';

const router = Router();

router.get("/movies/search", authenticate, movieController.searchMovies);
router.get("/movies", authenticate, movieController.getAllMovies);
//en  l'utilisant dans prisma ne pas mettre : avant l'id
router.get("/movies/:id", authenticate, movieController.getMovieById);

router.post("/movies", authenticate, movieController.createMovie);
router.put("/movies/:id", authenticate, movieController.updateMovie);
router.delete("/movies/:id", authenticate, movieController.deleteMovie);

export default router;