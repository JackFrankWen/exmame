import app from './app';
import github from './github';
import user from './user';
import equipment from './equipment';


export default {
  ...app,
  ...github,
  ...user,
  ...equipment
};
