import Posts from '../mock/posts';

export default class PostApis {
  static getPosts = () => {
    return Promise.all(Posts);
  };
}
