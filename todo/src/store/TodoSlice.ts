import {makeAutoObservable} from "mobx";

export interface todoInterface {
    id: string,
    todoTitle: string,
    status: boolean,
    edit: boolean
}

class TodoSlice {
    todos: todoInterface[] = [];
    todoTitleInput: string = '';

    evenFilter: boolean = false
    oddFilter: boolean = false;

    newTitle: string = ''

    constructor() {
        makeAutoObservable(this);
    }

    setNewTitle = (title: string) => {
        this.newTitle = title;
    }

    toggleEditFlag = (id: string) => {
        this.todos.forEach(todo => todo.id === id ? todo.edit = !todo.edit : null)
    }

    toggleEvenFlag = () => {
        if (this.oddFilter) this.oddFilter = false
        this.evenFilter = !this.evenFilter;
    }

    toggleOddFlag = () => {
        if (this.evenFilter) this.evenFilter = false
        this.oddFilter = !this.oddFilter;
    }

    setTodoTitleInput = (value: string) => {
        this.todoTitleInput = value
    }

    addTodo = (todo: todoInterface) => {
        this.todos.push(todo)
        this.setTodoTitleInput('')
    }

    removeTodo = (id: string) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    updateTodo = (newTitle: string, id: string) => {
        this.todos.forEach(todo => {
            if (todo.id === id) todo.todoTitle = newTitle;
        })
    }

    completeTodo = (id: string) => {
        let curTodo: todoInterface = {todoTitle: 'none', id: "1", status: false, edit: false}
        let curIndex: number = 0
        this.todos.forEach((todo, index) => {
            if (todo.id === id) {
                todo.status = !todo.status
                curTodo = todo as todoInterface
                curIndex = index
            }
        })
        if (curTodo.todoTitle !== 'none') {
            if (curTodo.status) {
                this.todos.splice(curIndex, 1)
                this.todos.push(curTodo)
            } else {
                this.todos.splice(curIndex, 1)
                this.todos.unshift(curTodo)
            }
        }
    }
    removeLastTodo = () => {
        this.todos.pop()
    }

    removeFirstTodo = () => {
        this.todos.shift()
    }


}

const TodoObj = new TodoSlice()
export default TodoObj;