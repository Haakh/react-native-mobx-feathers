class NavigationStore {
  @observable headerTitle = 'Index';
  @observable.ref
  navigationState = {
    index: 0,
    routes: [{ key: 'Index', routeName: 'Index' }],
  };

  // NOTE: the second param, is to avoid stacking and reset the nav state
  @action
  dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null;
    return (this.navigationState = AppNavigator.router.getStateForAction(action, previousNavState));
  };
}

// NOTE: the top level component must be a reactive component
@observer
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    // initialize the navigation store
    this.store = new NavigationStore();
  }

  render() {
    // patch over the navigation property with the new dispatch and mobx observed state
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.store.dispatch,
          state: this.store.navigationState,
        })}
      />
    );
  }
}
