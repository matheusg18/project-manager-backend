import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { workspaceCard } from './schemas/schemas.joi';
import BadRequestError from '../helpers/BadRequestError';
import { IWorkspaceCardCreate } from '../interfaces/routes';

const schema = joi.object({
  columnId: workspaceCard.columnId,
  content: workspaceCard.content,
  title: workspaceCard.title,
  index: workspaceCard.index,
});

const validateCreateWorkspaceCard = (req: Request, _res: Response, next: NextFunction) => {
  const { content, title, columnId, index }: IWorkspaceCardCreate = req.body;
  const { error } = schema.validate({ content, title, columnId, index });

  if (error) return next(new BadRequestError(error.message));

  next();
};

export { validateCreateWorkspaceCard };
