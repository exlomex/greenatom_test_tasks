import cls from './Todo.module.scss';
import {memo} from "react";
import {observer} from "mobx-react-lite";
import todoSlice, {todoInterface} from '@/store/TodoSlice'
import {Button} from "@/components/Button";
import {ButtonColorTypes} from "@/components/Button/Button";
import {Input} from "@/components/Input";

export const Todo = memo(observer(() => {
    const handleCompleteTodo = (id: string) => () => {
        todoSlice.completeTodo(id)
    }

    const handleDeleteTodo = (id: string) => () => {
        todoSlice.removeTodo(id)
    }

    const handleChangeTodo = (id: string, edit: boolean) => () => {
        if (edit) {
            if (todoSlice.newTitle.trim().length) {
                todoSlice.updateTodo(todoSlice.newTitle, id);
                todoSlice.setNewTitle('');
            }
        } else {
            todoSlice.todos.forEach(todo => {
                if (todo.edit) todo.edit = !todo.edit;
                todoSlice.setNewTitle('');
            })
        }
        todoSlice.toggleEditFlag(id);
    }

    return (
        <div className={cls.Todos}>
            {todoSlice.todos && todoSlice.todos.map((todo, index) => (
                <div
                     className={`${cls.Todo} ${cls[todoSlice.evenFilter ? (index + 1) % 2 === 0 ? 'selected': 'none' : todoSlice.oddFilter ? (index + 1) % 2 === 1 ? 'selected': 'none' : 'none']}`}
                     key={todo.id}>
                    <input type={'checkbox'} className={cls.todoCheckbox} checked={todo.status} onChange={handleCompleteTodo(todo.id)}/>
                    <div  className={cls.todoTitle}>{todo.todoTitle}</div>
                    {todo.edit && <Input type={"darkness"} placeholder={'Новое название'} value={todoSlice.newTitle} onChange={todoSlice.setNewTitle}/>}
                    <Button buttonSize={'s'} colorType={ButtonColorTypes.GREY} onClick={handleChangeTodo(todo.id, todo.edit)}>Редактировать</Button>
                    <Button buttonSize={'s'} colorType={ButtonColorTypes.RED} onClick={handleDeleteTodo(todo.id)}>Удалить</Button>
                </div>
            ))}
        </div>
    )
}));
