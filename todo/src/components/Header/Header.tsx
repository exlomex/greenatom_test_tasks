import cls from './Header.module.scss';
import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {ButtonColorTypes} from "@/components/Button/Button";
import todoSlice, {todoInterface} from '@/store/TodoSlice'
import {observer} from "mobx-react-lite";
import { v4 as uuidv4 } from 'uuid';
import {useCallback, useEffect} from "react";


export const Header = observer(() => {
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAddHandler()
        }
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, []);


    const onAddHandler = () => {
        const todoTemplate: todoInterface = {
            id: '',
            status: false,
            todoTitle: '',
            edit: false,
        }

        if (todoSlice.todoTitleInput.trim().length) {
            todoSlice.addTodo({...todoTemplate, todoTitle: todoSlice.todoTitleInput, id: uuidv4()})
        }
    }

    return (
        <div className={cls.Header}>
            <h1 className={cls.header_title}>Todo лист</h1>

            <div className={cls.todoActions}>
                <div className={cls.firstRowButtons}>
                    <Input onChange={todoSlice.setTodoTitleInput} value={todoSlice.todoTitleInput}/>
                    <Button colorType={ButtonColorTypes.RED} onClick={onAddHandler}>Добавить Todo</Button>
                </div>
                <div className={cls.secondRowButtons}>
                    <Button onClick={todoSlice.removeLastTodo}>Удалить последний todo</Button>
                    <Button onClick={todoSlice.removeFirstTodo}>Удалить первый todo</Button>
                    <Button onClick={todoSlice.toggleEvenFlag} active={todoSlice.evenFilter}>Только четные</Button>
                    <Button onClick={todoSlice.toggleOddFlag} active={todoSlice.oddFilter}>Только нечетные</Button>
                </div>
            </div>
        </div>
    )
});
