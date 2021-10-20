import { todolistsAPI } from './../api/todolists-api';
import { Dispatch } from "redux";
import { v1 } from "uuid";
import { TodolistType } from "../api/todolists-api";

type ActionsType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType
    | SetTodolistsActionType

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    todolist: TodolistType
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    id: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}
export type SetTodolistsActionType = {
    type: 'SET-TODOLISTS',
    //TodolistType потому что тудулисты от сервера, без фильтра
    todolists: Array<TodolistType>
}


const initialState: Array<TodolistDomainType> = []

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
}


export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: ActionsType): Array<TodolistDomainType> => {
    switch (action.type) {

        case 'REMOVE-TODOLIST': {
            let endState = [...state]
            return endState.filter(tl => tl.id !== action.id);
        }
        case 'ADD-TODOLIST':
            let newTodoList: TodolistDomainType = {
                ...action.todolist,
                filter: 'all'
            }
            return [newTodoList, ...state];

        case 'CHANGE-TODOLIST-TITLE': {
            let endState = [...state]
            let todolist = endState.find(t => t.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return endState;
        }
        case 'CHANGE-TODOLIST-FILTER': {
            let endState = [...state]
            let changedTodoList = endState.find(tl => tl.id === action.id);
            if (changedTodoList) {
                changedTodoList.filter = action.filter
            }
            return endState;
        }
        case "SET-TODOLISTS": {
            return action.todolists.map(tl => {
                return {
                    ...tl,
                    filter: "all"
                }
            })
        }

        default:
            return state
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId }
}
export const addTodolistAC = (todolist: TodolistType): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', todolist }
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id: id,
        title: title
    }
}
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id: id,
        filter: filter
    }
}

export const setTodolistsAC = (todolists: Array<TodolistType>): SetTodolistsActionType => {
    return { type: "SET-TODOLISTS", todolists }
}


export const fetchTodolistsThunkCreator = () => {

    return (dispatch: Dispatch) => {
        todolistsAPI.getTodolists()
            .then((res) => {
                dispatch(setTodolistsAC(res.data))
            })
    }
}


export const removeTodolistThunkCreator = (todolistId: string) => {

    return (dispatch: Dispatch) => {
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                dispatch(removeTodolistAC(todolistId))
            })
    }
}

export const addTodolistThunkCreator = (title: string) => {

    return (dispatch: Dispatch) => {
        todolistsAPI.createTodolist(title)
            .then((res) => {
                dispatch(addTodolistAC(res.data.data.item))
            })
    }
}

export const changeTodolistTitleThunkCreator = (todolistId: string, newTitle: string) => {

    return (dispatch: Dispatch) => {
        todolistsAPI.updateTodolistTitle(todolistId, newTitle)
            .then((res) => {
                dispatch(changeTodolistTitleAC(todolistId, newTitle))
            })
    }
}
