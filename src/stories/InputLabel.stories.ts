import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from './InputLabel';

const meta: Meta<typeof InputLabel> = {
    title: 'Components/InputLabel',
    component: InputLabel,
    argTypes: {
        position: { control: 'radio', options: ['top', 'side'] },
        required: { control: 'boolean' },
        optionalText: { control: 'boolean' },
        darkMode: { control: 'boolean' },
    },
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopLabel: Story = {
    args: {
        htmlFor: 'input-id',
        text: 'Top Label',
        required: true,
        position: 'top',
    },
};

export const SideLabel: Story = {
    args: {
        htmlFor: 'input-id',
        text: 'Side Label',
        required: true,
        position: 'side',
    },
};

export const OptionalLabel: Story = {
    args: {
        htmlFor: 'input-id',
        text: 'Label with optional text',
        required: false,
        position: 'top',
        optionalText: true,
    },
};
