import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ComponentAComponent } from '../app/component-a/component-a.component';
storiesOf('Component A', module)
  .add('Message Viewer Demo', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Message Viewer Demo 123',
      myEvent: action('Hello Jane!')
    },
  }))
  .add('Priya', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Priya',
      myEvent: action('Hello Chris!')
    },
  }))
  .add('Joe', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Joe',
      myEvent: action('Hello Joe!')
    },
  }));
