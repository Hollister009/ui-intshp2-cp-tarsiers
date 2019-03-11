class LocalStorage {
  getState(key) {
    try {
      const serializedState = localStorage.getItem(key);

      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }

  setState(key, value) {
    try {
      const serializedState = JSON.stringify(value);

      localStorage.setItem(key, serializedState);
      return serializedState;
    } catch (err) {
      return undefined;
    }
  }

  clearState() {
    localStorage.clear();
  }
}

export default new LocalStorage();
