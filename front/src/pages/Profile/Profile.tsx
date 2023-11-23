import React from 'react'
import { useStore, useGate } from 'effector-react';

import { UserModel } from '../../models';

const Profile = () => {
  const { user } = useStore(UserModel.stores);

  useGate(UserModel.gates.gate)

  if (!user) {
    return <div data-testid="no-user">Пользователя нет</div>
  }

  return <div data-testid="user">
    <p>{`Фамилия: ${user.surname}`}</p>
    <p>{`Имя: ${user.name}`}</p>
    <p>{`Отчество: ${user.patronymic ?? 'отсутствует'}`}</p>
  </div>
}

export default Profile;