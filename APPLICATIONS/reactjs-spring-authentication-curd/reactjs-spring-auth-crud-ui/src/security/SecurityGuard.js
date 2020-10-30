import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../service/LocalStorageService";

class SecurityGuard extends Route {
  constructor(props) {
    super(props);
    console.log("SecurityGuard.constructor()", props);
  }

  render() {
    const authStatus = LocalStorageService.isCurrentUserAuthenticated();
    if (authStatus) {
      let Component = this.props.component;
      console.log(`SecurityGuard`, authStatus, this.props, Component);
      return <Component {...this.props} />;
    }
    return <Redirect to="/login" />;
  }
}

export default SecurityGuard;
