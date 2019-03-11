import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';

class CookieService {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  get(cookies, name, options = {}) {
    return cookies.get(name, options);
  }

  set(cookies, name, value, options = {}) {
    return cookies.set(name, value, options);
  }

  remove(cookies, name, options = {}) {
    return cookies.remove(name, options);
  }
}

export default new CookieService();
