import cls from './Input.module.scss';
import {InputHTMLAttributes, useEffect, useRef} from "react";

type InputOmitProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'maxLength'>
interface InputProps extends InputOmitProps{
    onChange?: (value: string) => void
    value?: string;
    maxLength?: number;
}

export const Input = (props: InputProps) => {
    const {onChange, value, maxLength, placeholder} = props
    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        onChange?.(e.target.value);
    }

    return (
        <input
            className={cls.Input}
            onChange={onChangeHandler}
            value={value} maxLength={maxLength}
            placeholder={placeholder}/>
    )
};
