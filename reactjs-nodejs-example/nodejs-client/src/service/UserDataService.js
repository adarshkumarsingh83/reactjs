import axios from "axios";

const USER_API_BASE_URL = "http://localhost:3200/api/users";

class UserDataService {
  static fetchUsers() {
    return axios.get(USER_API_BASE_URL);
  }
}

export default UserDataService;
