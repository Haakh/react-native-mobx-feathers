import UserDomainStore from '../stores/domain/user';
import ListDomainStore from '../stores/domain/list';

import UserViewStore from '../stores/view/user';
import ListViewStore from '../stores/view/list';

export default function () {
  const viewUser = new UserViewStore();
  const viewList = new ListViewStore();
  const domainUser = new UserDomainStore();
  const domainList = new ListDomainStore();

  return {
    viewList,
    viewUser,
    domainUser,
    domainList,
  };
}
