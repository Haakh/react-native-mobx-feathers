import AuthUserStore from '../store/Domain/AuthUserStore';
import CategoryListingStore from '../store/Domain/CategoryListingStore';
import CategoryStore from '../store/Domain/CategoryStore';
import ChatStore from '../store/Domain/ChatStore';
import FeedStore from '../store/Domain/FeedStore';
import GroupsStore from '../store/Domain/GroupsStore';

import ViewStore from '../store/View/ViewStore';
import AboutViewStore from '../store/View/AboutViewStore';
import CategoryViewStore from '../store/View/CategoryViewStore';
import ChatViewStore from '../store/View/ChatViewStore';
import FeedbackViewStore from '../store/View/FeedbackViewStore';
import FeedViewStore from '../store/View/FeedViewStore';
import FormViewStore from '../store/View/FormViewStore';
import GroupsViewStore from '../store/View/GroupsViewStore';
import ProfileViewStore from '../store/View/ProfileViewStore';
import RegisterViewStore from '../store/View/RegisterViewStore';
import VerifyViewStore from '../store/View/VerifyViewStore';


export default function () {
  const viewView = new ViewStore();
  const viewAbout = new AboutViewStore();
  const viewCategory = new CategoryViewStore();
  const viewChat = new ChatViewStore();
  const viewFeed = new FeedViewStore(viewView);
  const viewForm = new FormViewStore();
  const viewGroups = new GroupsViewStore();
  const viewProfile = new ProfileViewStore();
  const viewRegister = new RegisterViewStore();
  const viewVerify = new VerifyViewStore();
  const domainUser = new AuthUserStore(viewRegister, viewView, viewVerify, viewForm, viewProfile);
  const viewFeedback = new FeedbackViewStore(domainUser, viewView);
  const domainCategoryList = new CategoryListingStore();
  const domainCategory = new CategoryStore(viewCategory, domainCategoryList);
  const domainGroups = new GroupsStore(viewChat, viewView, viewGroups, domainUser);
  const domainChat = new ChatStore(viewChat, domainGroups, domainUser);
  const domainFeed = new FeedStore(viewFeed);


  return {
    viewView,
    viewAbout,
    viewCategory,
    viewChat,
    viewFeedback,
    viewFeed,
    viewForm,
    viewGroups,
    viewProfile,
    viewRegister,
    viewVerify,
    domainUser,
    domainCategoryList,
    domainCategory,
    domainChat,
    domainFeed,
    domainGroups,
  };
}
