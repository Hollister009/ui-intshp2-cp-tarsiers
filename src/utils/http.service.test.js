/* eslint-disable no-unused-vars */
import axios from 'axios';
import HttpService from './http.service';

const mockUrl = '';
const mockData = {};

describe('get', () => {
  test('should answer on GET', () => {
    const spy = jest.spyOn(axios, 'get');

    HttpService.get(mockUrl);
    expect(spy).toHaveBeenCalled();
  });
});

describe('post', () => {
  test('should answer on POST', () => {
    const spy = jest.spyOn(axios, 'post');

    HttpService.post(mockUrl, mockData);
    expect(spy).toHaveBeenCalled();
  });
});

describe('delete', () => {
  test('should answer on DELETE', () => {
    const spy = jest.spyOn(HttpService, 'delete');

    HttpService.delete(mockUrl, mockData);
    expect(spy).toHaveBeenCalled();
  });
});

describe('patch', () => {
  test('should answer on PATCH', () => {
    const spy = jest.spyOn(HttpService, 'patch');

    HttpService.patch(mockUrl, mockData);
    expect(spy).toHaveBeenCalled();
  });
});

describe('put', () => {
  test('should answer on PUT', () => {
    const spy = jest.spyOn(HttpService, 'put');

    HttpService.put(mockUrl, mockData);
    expect(spy).toHaveBeenCalled();
  });
});

describe('create', () => {
  test('should answer on CREATE', () => {
    const spy = jest.spyOn(HttpService, 'create');

    HttpService.create(mockData);
    expect(spy).toHaveBeenCalled();
  });
});
