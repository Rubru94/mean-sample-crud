//importing modules
import express from 'express';
import controller from '../controllers/post.controller';

// initiating the router
export const router = express.Router();
const { create, getAll, getOne, update, remove } = controller;

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', update);
router.delete('/:id', remove);
