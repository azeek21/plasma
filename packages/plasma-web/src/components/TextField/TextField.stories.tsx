import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IconPlaceholder, InSpacingDecorator } from '../../helpers';

import { TextField, TextFieldProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const sizes = ['l', 'm', 's'];
const statuses = ['', 'success', 'warning', 'error'];

export default {
    title: 'Controls/TextField',
    component: TextField,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
        maxLength: {
            control: {
                type: 'number',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
    },
} as Meta;

interface DefaultSortyProps
    extends Omit<
        TextFieldProps,
        | 'helperBlock'
        | 'contentLeft'
        | 'htmlSize'
        | 'contentRight'
        | 'type'
        | 'name'
        | 'onFocus'
        | 'onBlur'
        | 'onChange'
        | 'value'
        | 'checked'
        | 'maxLength'
        | 'minLength'
        | 'required'
    > {
    'storybook:contentLeft': boolean;
    'storybook:contentRight': boolean;
}

export const Default: Story<DefaultSortyProps> = ({
    'storybook:contentLeft': enableContentLeft,
    'storybook:contentRight': enableContentRight,
    status,
    ...rest
}) => {
    const [value, setValue] = React.useState('Значение поля');

    return (
        <TextField
            {...rest}
            value={value}
            contentLeft={enableContentLeft && <IconPlaceholder />}
            contentRight={enableContentRight && <IconPlaceholder />}
            status={status || undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
        />
    );
};

Default.args = {
    id: 'example-text-field',
    size: 'l',
    label: 'Лейбл',
    animatedHint: undefined,
    placeholder: 'Заполните поле',
    helperText: 'Подсказка к полю',
    status: '' as 'success',
    disabled: false,
    readOnly: false,
    'storybook:contentLeft': true,
    'storybook:contentRight': true,
};

Default.argTypes = {
    animatedHint: {
        options: ['label', 'placeholder'],
        control: {
            type: 'inline-radio',
        },
    },
};

export const DeferredValue: Story<{ readOnly: boolean }> = ({ readOnly }) => {
    const [asyncValue, setAsyncValue] = React.useState('');

    React.useEffect(() => {
        setTimeout(() => {
            setAsyncValue("Sorry i'm late :)");
        }, 3000);
    }, []);

    return <TextField placeholder="Wait three seconds..." defaultValue={asyncValue} readOnly={readOnly} />;
};

DeferredValue.args = {
    readOnly: true,
};
