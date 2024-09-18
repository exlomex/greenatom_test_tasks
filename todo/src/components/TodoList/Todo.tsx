import cls from './Todo.module.scss';
import {memo} from "react";
import {observer} from "mobx-react-lite";
import todoSlice, {todoInterface} from '@/store/TodoSlice'
import {Button} from "@/components/Button";
import {ButtonColorTypes} from "@/components/Button/Button";
import {Input} from "@/components/Input";

export const Todo = memo(observer(() => {
    const todos = todoSlice.todos.filter((todo, index) => {
        if (todoSlice.evenFilter) {
            if ((index + 1) % 2 === 0) return todo
            return
        } else if (todoSlice.oddFilter) {
            if ((index + 1) % 2 !== 0) return todo
            return
        }
        return todo
    })

    const handleCompleteTodo = (id: string) => () => {
        todoSlice.completeTodo(id)
    }

    const handleDeleteTodo = (id: string) => () => {
        todoSlice.removeTodo(id)
    }

    const handleEditTodo = (id: string) => {
        todoSlice.updateTodo(todoSlice.newTitle, id);
        todoSlice.setNewTitle('');
    }
    const handleChangeTodo = (id: string, edit: boolean) => () => {
        if (edit) {
            if (todoSlice.newTitle.trim().length) {
                handleEditTodo(id)
            }
        } else {
            todoSlice.todos.forEach(todo => {
                if (todo.edit) todo.edit = !todo.edit;
                handleEditTodo(id)
            })
        }
        todoSlice.toggleEditFlag(id);
    }

    return (
        <div className={cls.Todos}>
            {todos && todos.map((todo) => (
                <div className={cls.Todo} key={todo.id}>
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
