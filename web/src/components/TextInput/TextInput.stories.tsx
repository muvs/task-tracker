import { TextInput } from './TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowRight, Mail } from 'react-feather';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  placeholder: 'Placeholder',
  LeftIcon: Mail,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  placeholder: 'Placeholder',
  RightIcon: ArrowRight,
};

export const WithRightAndLeftIcon = Template.bind({});
WithRightAndLeftIcon.args = {
  placeholder: 'Placeholder',
  LeftIcon: Mail,
  RightIcon: ArrowRight,
};