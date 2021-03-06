import express from 'express';

// we wont be putting any logic in this folder, only routers, and have a separete controllers folder for our logic.
// for better code readabilty and use.
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;
