import { Header } from "./components/Header";
import cls from './App.module.scss'
import {QuoteContainer} from "./components/QuoteContainer";

export const App = () => {
    return (
        <div className={`wrapper ${[cls.App_container]}`}>
            <Header/>
            <QuoteContainer/>
        </div>
    )
};
