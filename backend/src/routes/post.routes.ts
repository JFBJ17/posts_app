import { Router } from 'express';

import { getPosts, getPost, createPost, deletePost, updatePost } from '../controllers/post.controller'

const routes = Router();

routes.route('/')
    .get(getPosts)
    .post(createPost);

routes.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default routes;