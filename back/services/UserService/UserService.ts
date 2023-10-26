import { UserRepository } from "@repositories";

const UserService = {
  getMe: async () => {
    const me = await UserRepository.getMe();

    if (!me) {
      throw 'Нет пользователя'
    }

    return me;
  }
}

export default Object.freeze(UserService);