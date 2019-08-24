import { createSelector } from 'reselect';
import { filter } from 'lodash';

/**
 * 
 * Should use Rel
 */

export const postsSelector = state => state.Posts;
export const selectedPostsSelector = state => state.selectedPosts;

const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = filter(posts, post => selectedPostIds.includes(post.id));
  return selectedPosts;
};

export default createSelector(
  postsSelector,
  selectedPostsSelector,
  getPosts
);
