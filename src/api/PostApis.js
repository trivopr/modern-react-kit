import { get, post, put, deleteCall } from './configApi';

export default class PostApis {
  static async getPosts() {
    const result = await get('https://jsonplaceholder.typicode.com/posts');
    return result.data;
  }
}
