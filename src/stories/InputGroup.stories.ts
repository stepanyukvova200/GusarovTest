import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputGroupProps } from './InputGroup';
import { InputLabelProps } from './InputLabel';
import { InputTextProps } from './InputText';
import { InputAnnotationProps } from './InputAnnotation';

const meta: Meta<typeof InputGroup> = {
    title: 'Components/InputGroup',
    component: InputGroup,
    argTypes: {
        label: { control: 'object' },
        input: { control: 'object' },
        annotation: { control: 'object' },
        helpText: { control: 'text' },
        errorMessage: { control: 'text' },
        darkMode: { control: 'boolean' },
    },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<InputGroupProps>;

export const Default: Story = {
    args: {
        label: {
            htmlFor: 'input-id',
            text: 'Label',
            required: true,
        } as InputLabelProps,
        input: {
            value: '',
            placeholder: 'Enter text...',
            disabled: false,
        } as InputTextProps,
        annotation: {
            text: 'This is an error annotation',
            type: 'error',
            showIcon: true,
        } as InputAnnotationProps,
        helpText: 'This is some helpful text.',
        darkMode: false,
    },
};

export const DarkMode: Story = {
    args: {
        ...Default.args,
        darkMode: true,
    },
};
