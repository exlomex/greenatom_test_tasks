import cls from './SearchContainer.module.scss';
import {Input} from "@/components/Input";
import {observer} from "mobx-react-lite";
import SearchSlice from '@/store/slices/SearchSlice'
import {useCallback, useEffect} from "react";
import {QueryResultWrapper} from "@/components/QueryResultWrapper";


export const SearchContainer = observer(() => {
    const onSearchHandler = useCallback(() => {
        if (SearchSlice.query.trim().length) {
            SearchSlice.fetchByQuery()
        }
    },[])

    const onKeyPressHandler = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearchHandler()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeyPressHandler)
        return () => window.removeEventListener('keydown', onKeyPressHandler)
    }, []);

    return (
        <div className={cls.SearchContainer}>
            <h2 className={cls.search_title}>Найдите любую запись в wiki</h2>
            <div className={cls.inputWrapper}>
                <Input onChange={SearchSlice.setQuery} value={SearchSlice.query}/>
                <button className={cls.Button} onClick={onSearchHandler}>Найти</button>
                <a href={'https://en.wikipedia.org/wiki/Special:Random'}
                   target="_blank" rel="noreferrer"
                    className={cls.Button}>
                    Случайная страница</a>
            </div>
            <QueryResultWrapper/>
        </div>
    )
});
