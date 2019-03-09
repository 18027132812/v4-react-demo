/**
 * @author v4 <lucky6616888@163.com>
 */
import Mock from 'mockjs';
const Random = Mock.Random;

Mock.mock('/login', 'post', {
  code: 100,
  data: {
    'results|5-10': [
      {
        'id|+1': 1,
        'title': '@ctitle',
        'img': Random.image('400x400', Random.hex(), '商品@id')
      }
    ]
  }
});
