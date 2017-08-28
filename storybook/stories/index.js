import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './components/Button';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import SignUpScreen from './screens/signup';

storiesOf('Login', module).add('Login', () => <LoginScreen />);
storiesOf('Home', module).add('Home', () => <HomeScreen />);
storiesOf('SignUp', module).add('SignUp', () => <SignUpScreen />);

storiesOf('Button', module)
  .add('with text', () =>
    (<Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>),
  )
  .add('with some emoji', () =>
    (<Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>),
  );
