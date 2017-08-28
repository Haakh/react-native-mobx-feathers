import UserDomainStore from '../stores/domain/user';
import ListDomainStore from '../stores/domain/list';

import HomeViewStore from '../stores/view/home';
import LoginViewStore from '../stores/view/login';
import SignUpViewStore from '../stores/view/signup';

export default function () {
  const viewHome = new HomeViewStore();
  const viewSignUp = new LoginViewStore();
  const viewLogin = new SignUpViewStore();

  const domainUser = new UserDomainStore();
  const domainList = new ListDomainStore();

  return {
    viewHome,
    viewSignUp,
    viewLogin,
    domainUser,
    domainList,
  };
}
