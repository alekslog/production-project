
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
