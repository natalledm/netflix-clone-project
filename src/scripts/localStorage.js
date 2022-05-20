const localStorageKey = "userId";

// save user Id on local storage
export function setLocalStorageUser(uid) {
  return localStorage.setItem(localStorageKey, uid);
}

export function getLocalStorageUser() {
  return localStorage.getItem(localStorageKey);
}

export function removeLocalStorageUser() {
  localStorage.removeItem(localStorageKey);
}
