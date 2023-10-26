import prisma from '@orm/client';

const UserRepository = {
  getMe: async () => {
    const me = await prisma.user.findFirst();

    return me;
  }
}

export default Object.freeze(UserRepository);