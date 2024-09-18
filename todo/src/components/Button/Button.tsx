import cls from './Button.module.scss';
import {InputHTMLAttributes, ReactElement, ReactNode} from "react";

export enum ButtonColorTypes {
    DEFAULT = 'defaultStyle',
    RED = 'redStyle',
    GREY = 'greyStyle'
}

type ButtonSize = 's' | 'm'

type ButtonAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick'>

interface ButtonProps extends ButtonAttrs{
    onClick?: () => void
    children: ReactNode;
    colorType?: ButtonColorTypes;
    buttonSize?: ButtonSize;
    active?: boolean
}

export const Button = (props: ButtonProps) => {
    const { onClick, disabled, children, colorType =  ButtonColorTypes.DEFAULT, buttonSize = 'm', active} = props;
    return (
        <button className={`${cls.Button} ${cls[colorType]} ${cls[buttonSize]} ${cls[active ? 'active' : 'pass']}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
};
