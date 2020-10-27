const AUTHKEY = "AUTHKEY";

class LocalStorageService {
  static saveInStorage(authentication) {
    return localStorage.setItem(AUTHKEY, JSON.stringify(authentication));
  }

  static getFromStorage() {
    let storeValue = localStorage.getItem(AUTHKEY);
    console.log(`LocalStorageService.getFromStorage() `);
    if (storeValue !== "") {
      return JSON.parse(storeValue);
    }
    return {};
  }

  static getTokenAndKey() {
    let authentication = LocalStorageService.getFromStorage();
    console.log(`LocalStorageService.getTokenAndKey() `);
    if (authentication !== null) {
      const value = authentication.token;
      return value;
    }
  }

  static isCurrentUserAuthenticated() {
    let authentication = LocalStorageService.getFromStorage();
    console.log(`LocalStorageService.isCurrentUserAuthenticated() `);
    if (authentication !== null) {
      if (authentication.isAuthenticated !== null) {
        return authentication.isAuthenticated;
      }
    }
    return false;
  }

  static clearStorage() {
    localStorage.clear();
  }
}

export default LocalStorageService;
