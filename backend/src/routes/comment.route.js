import exporess from 'express';
import { createComment, deleteComment, getComments } from '../controllers/comment.controller';
import { protectRoute } from '../middleware/auth.middleware';

const router = exporess.Router();

router.get('/post/:postId', getComments);

//private routes
router.post('/post/:postId', protectRoute, createComment);
router.delete('/:commentId', protectRoute, deleteComment);

export default router;