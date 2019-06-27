import Loadable from 'react-loadable';
import LoadingSpinner from '../components/LoadingSpinner';

const AboutLoadable = Loadable({
  loader: () => import('../pages/about'),
  loading: LoadingSpinner,
});
const HomeLoadable = Loadable({
  loader: () => import('../pages/home'),
  loading: LoadingSpinner,
});
const ContactLoadable = Loadable({
  loader: () => import('../pages/contact'),
  loading: LoadingSpinner
});
const PostsLandingLoadable = Loadable({
  loader: () => import('../pages/posts-landing'),
  loading: LoadingSpinner
});

const Routes = [{
    path: "/",
    exact: true,
    component: HomeLoadable
  },
  {
    path: "/about",
    component: AboutLoadable,
  },
  {
    path: "/contact",
    component: ContactLoadable,
  },
  {
    path: "/posts-landing",
    component: PostsLandingLoadable,
  },
];

export default Routes;