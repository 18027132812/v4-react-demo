/**
 * @author v4 <lucky6616888@163.com>
 */
import { post } from './server';

export function doLoginApi (data) {
  let apiData = {
    url: '/login',
    params: data
  };
  return post(apiData);
}
