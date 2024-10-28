import { Request, Response } from 'express';
import { PostValidateSchema } from '@post/schemas';
import service from '@post/services/post.service';

export class PostController {
  async create(req: Request, res: Response): Promise<void> {
    const { title, author, description, published } = req.body;
    const data = {
      title,
      author,
      description,
      published
    };
    // validating the request
    const { error, value } = PostValidateSchema.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      const post = await service.create(value);
      res.status(201).send(post);
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const posts = await service.getAll();
    res.send(posts);
  }

  async getOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params; // get id from the parameter
    const post = await service.getById(id);
    res.send(post);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const post = await service.update(id, req.body);
    res.send(post);
  }

  async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await service.delete(id);
    res.send('post deleted');
  }
}

export default new PostController();
