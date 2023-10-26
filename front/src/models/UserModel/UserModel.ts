import { createStore, createEffect, forward, combine } from "effector";
import {createGate} from 'effector-react'

import type { User } from '../../../../back/models'
import { UserApi } from "../../api";

const gate = createGate()

const getUserFx = createEffect(UserApi.getMe)

const $user = createStore<User | null>(null)
  .on(getUserFx.doneData, (_, user) => user);

forward({from: gate.open, to: getUserFx })

const UserModel = {
  stores: combine({
    user: $user
  }),
  gates: {
    gate
  }
}
  
export default UserModel;