import cls from './App.module.scss';
import {Header} from "@/components/Header";
import {Todo} from "@/components/TodoList";
export const App = () => {
    return (
        <div className={`${[cls.App]} wrapper`}>
            <Header/>
            <Todo/>
        </div>
    )
};
