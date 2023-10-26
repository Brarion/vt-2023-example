import { User } from '../../../../back/models';
import api from '../api'

class UserApi {
  static endpointUrl = '/user'
  
  static getMe = async () => api.get<User | null>(`${UserApi.endpointUrl}`).then(res => res.data);
}

export default UserApi;