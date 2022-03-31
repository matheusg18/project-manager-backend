import express from 'express';
import rescue from 'express-rescue';
import * as Controller from '../controllers/WorkspaceColumn';
import auth from '../middlewares/auth';
import { validateCreateWorkspaceColumn } from '../middlewares/CreateWorkspaceColumn';

const WorkspaceColumnRoutes = express.Router();

WorkspaceColumnRoutes.post('/', validateCreateWorkspaceColumn, rescue(Controller.Create));
WorkspaceColumnRoutes.put('/:id', auth, rescue(Controller.update));

export { WorkspaceColumnRoutes };
