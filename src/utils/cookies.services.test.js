import { Cookies } from 'react-cookie';
import CookieService from './cookies.services';

describe('get', () => {
  test('should answer on GET', () => {
    const cookies = new Cookies();
    const spy = jest.spyOn(CookieService, 'get');

    CookieService.get(cookies, 'cookie1');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('set', () => {
  test('should answer on SET', () => {
    const cookies = new Cookies();
    const spy = jest.spyOn(CookieService, 'set');

    CookieService.set(cookies, 'cookie1', 'cookiename1', {
      path: '/'
    });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('remove', () => {
  test('should answer on REMOVE', () => {
    const cookies = new Cookies();
    const spy = jest.spyOn(CookieService, 'remove');

    CookieService.remove(cookies, 'cookie1');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
