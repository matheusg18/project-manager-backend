import NotFoundError from '../../helpers/NotFoundError';
import prisma from '../../prisma';

const exclude = async (id: number) => {
  const findColumn = await prisma.workspace.findUnique({ where: { id } });

  if (!findColumn) throw new NotFoundError('Workspace not found');

  await prisma.workspace.delete({ where: { id } });
};

export { exclude };
