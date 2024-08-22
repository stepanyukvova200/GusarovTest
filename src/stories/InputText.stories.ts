import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';

const meta: Meta<typeof InputText> = {
    title: 'Components/InputText',
    component: InputText,
    argTypes: {
        size: { control: 'radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        quiet: { control: 'boolean' },
        hasError: { control: 'boolean' },
        disabled: { control: 'boolean' },
        darkMode: { control: 'boolean' },
    },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: '',
        placeholder: 'Enter text...',
        size: 'md',
        quiet: false,
        hasError: false,
        disabled: false,
        darkMode: false,
    },
};

export const Quiet: Story = {
    args: {
        ...Default.args,
        quiet: true,
    },
};

export const Error: Story = {
    args: {
        ...Default.args,
        hasError: true,
        placeholder: 'This field has an error',
    },
};
