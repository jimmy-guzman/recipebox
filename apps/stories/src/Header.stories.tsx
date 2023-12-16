import { Header } from '@recipe-box/components';
import { type Meta, type Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

const withRouter = (story: () => JSX.Element): JSX.Element => {
  return <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>;
};

export default {
  title: 'components/molecules/Header',
  component: Header,
  decorators: [withRouter],
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Primary = Template.bind({});
