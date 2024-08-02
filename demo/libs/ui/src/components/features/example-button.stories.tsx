import type { Meta, StoryObj } from '@storybook/react';
import { ExampleButton } from '../features/example-button';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExampleButton> = {
  component: ExampleButton,
  title: 'Example/Button',
};
export default meta;
type Story = StoryObj<typeof ExampleButton>;

export const Primary = {
  args: {
    text: 'Button',
    variant: "secondary"
  },
};

export const Heading: Story = {
  args: {
    text: 'Example',
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  play: async ({ canvasElement }: { canvasElement: any }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Example!/gi)).toBeTruthy();
  },
};
