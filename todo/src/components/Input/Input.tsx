import cls from './Input.module.scss';
import {InputHTMLAttributes, memo, useEffect, useRef} from "react";


type InputOmitProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'maxLength'>
interface InputProps extends InputOmitProps{
    onChange?: (value: string) => void
    value?: string;
    maxLength?: number;
    type?: 'darkness' | 'default'
}

export const Input = memo((props: InputProps) => {
    const {onChange, value, maxLength, placeholder, type = 'default'} = props
    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        onChange?.(e.target.value);
    }

    return (
        <input
            className={`${cls.Input} ${cls[type]}`}
            onChange={onChangeHandler}
            value={value} maxLength={maxLength}
            placeholder={placeholder}/>
    )
});
