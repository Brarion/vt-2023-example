import { Response, NextFunction } from "express"

import { UserService } from "@services"

const UserController = {
  getMe: (req: any, res: Response<any>, next: NextFunction) => {
    UserService.getMe()
      .then(me => res.status(200).send(me))
      .catch(error => {
        console.log(error)
        res.status(400).send(error);
      })
  }
}

export default Object.freeze(UserController)