import { IMaskInput } from 'react-imask';
import { InputBase } from '@mantine/core';
import { TextInputProps } from 'react-hook-form-mantine';
import { Controller, FieldValues } from 'react-hook-form';

export default function MaskedInput<T extends FieldValues>({ name, control, label, placeholder, mask, defaultValue, ...props }: TextInputProps<T> & { mask?: string }) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, value } }) => (
                <InputBase
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value?.toString()}
                    label={label}
                    component={IMaskInput}
                    mask={mask}
                    placeholder={placeholder}
                    {...props}
                />
            )}
        />
    );
}
