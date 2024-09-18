import cls from './MainLayout.module.scss'
import {ReactElement} from "react";
interface MainLayoutProps {
    rightSideProp: ReactElement;
    leftSideProp: ReactElement;
}

export const MainLayout = (prop: MainLayoutProps) => {
    const {rightSideProp, leftSideProp} = prop
    return (
        <div className={cls.layout}>
            <>{leftSideProp}</>
            <>{rightSideProp}</>
        </div>
    )
};
