const AUTHKEY = "AUTHKEY";

class LocalStorageService {
  static saveInStorage(authentication) {
    return localStorage.setItem(AUTHKEY, JSON.stringify(authentication));
  }

  static getFromStorage() {
    let storeValue = localStorage.getItem(AUTHKEY);
    console.log(`Store Value `, storeValue);
    if (storeValue !== "") {
      return JSON.parse(storeValue);
    }
    return {};
  }

  static isCurrentUserAuthenticated() {
    let authentication = LocalStorageService.getFromStorage();
    console.log(`auth value `, authentication);
    if (authentication !== null) {
      if (authentication.isAuthenticated !== null) {
        return authentication.isAuthenticated === true;
      }
    }
    return false;
  }

  static clearStorage() {
    localStorage.clear();
  }
}

export default LocalStorageService;
