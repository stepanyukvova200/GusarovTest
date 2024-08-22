import type { Meta, StoryObj } from '@storybook/react';
import { InputAnnotation } from './InputAnnotation';

const meta: Meta<typeof InputAnnotation> = {
    title: 'Components/InputAnnotation',
    component: InputAnnotation,
    argTypes: {
        type: { control: 'radio', options: ['info', 'error'] },
        showIcon: { control: 'boolean' },
    },
} satisfies Meta<typeof InputAnnotation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        text: 'This is an info annotation',
        type: 'info',
        showIcon: true,
    },
};

export const Error: Story = {
    args: {
        text: 'This is an error annotation',
        type: 'error',
        showIcon: false,
    },
};
