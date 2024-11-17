import { IMaskInput } from 'react-imask';
import { InputBase } from '@mantine/core';
import { TextInputProps } from 'react-hook-form-mantine';
import { Controller } from 'react-hook-form';
import { VeiculoForm } from '@/types/Veiculo';

export default function MaskedInput({ name, control, label, placeholder, mask }: TextInputProps<VeiculoForm> & { mask?: string }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <InputBase
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value?.toString()}
                    ref={ref}
                    label={label}
                    component={IMaskInput}
                    mask={mask}
                    placeholder={placeholder}
                />
            )}
        />
    );
}
