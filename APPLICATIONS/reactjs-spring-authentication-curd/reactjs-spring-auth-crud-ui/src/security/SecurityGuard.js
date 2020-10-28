import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../service/LocalStorageService";
/*
const SecurityGuard = ({ component: Component, ...rest }) => {
  const authStatus = LocalStorageService.isCurrentUserAuthenticated();
  console.log("SecurityGuard params :", authStatus, rest);
  return (
    <Route
      {...rest}
      render={(props) => 
        (authStatus) ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

*/

class SecurityGuard extends Route {
  constructor(props) {
    super(props);
  }

  render() {
    const authStatus = LocalStorageService.isCurrentUserAuthenticated();
    if (authStatus) {
      let Component = this.props.component;
      return <Component />;
    }
    return <Redirect to="/login" />;
  }
}

export default SecurityGuard;
