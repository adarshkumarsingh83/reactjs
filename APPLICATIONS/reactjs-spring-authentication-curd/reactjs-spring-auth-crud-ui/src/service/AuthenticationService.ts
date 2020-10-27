import axios from "axios";

const API_BASE_URL = "http://localhost:8080/";
class AuthenticationService {
  
  static login(userName: string, userPwd: string): object {
    console.log(`AuthenticationService.login()`, userName, userPwd);
    return axios.post("" + API_BASE_URL + "login", {
      userName: userName,
      userPwd: userPwd,
    });
  }
}
export default AuthenticationService;
