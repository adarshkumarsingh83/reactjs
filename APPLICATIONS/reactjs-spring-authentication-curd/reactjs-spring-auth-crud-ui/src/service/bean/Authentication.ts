interface Authentication {
  userName: String;
  email: String;
  isAuthenticated: Boolean;
  isAdmin: Boolean;
  isUser: Boolean;
  isGuest: Boolean;
}

export default Authentication;
