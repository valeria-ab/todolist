import { RequestStatusType } from './../../app/app-reducer';
import {
    addTodolistAC, changeTodolistFilterAC,
    ChangeTodolistFilterActionType,
    changeTodolistTitleAC,
    FilterValuesType,
    removeTodolistAC,
    setTodolistsAC,
    TodolistDomainType,
    todolistsReducer, changeTodolistEntityStatusAC, ChangeTodolistEntityStatusActionType
} from './todolists-reducer';
import { v1 } from 'uuid';

let todolistId1: string;
let todolistId2: string;
let startState: Array<TodolistDomainType> = [];

beforeEach(() => {
    todolistId1 = v1();
    todolistId2 = v1();
    startState = [
        { id: todolistId1, title: "What to learn", filter: 'all', addedDate: '', order: 0 , entityStatus: 'idle'},
        { id: todolistId2, title: "What to buy", filter: 'all', addedDate: '', order: 1 , entityStatus: 'idle'}
    ]
})


test('correct todolist should be removed', () => {

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {


    let newTodolist =  {
        id: "any id",
        title:  "New Todolist",
        addedDate: '',
        order: 0
    };

    const endState = todolistsReducer(startState, addTodolistAC(newTodolist))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolist.title);
    expect(endState[0].filter).toBe("all");
});

test('correct todolist should change its name', () => {


    let newTodolistTitle = "New Todolist";

    const endState = todolistsReducer(startState, changeTodolistTitleAC(todolistId2, newTodolistTitle));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {


    let newFilter: FilterValuesType = "completed";

    const endState = todolistsReducer(startState, changeTodolistFilterAC(todolistId2, newFilter));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});

test('todolists should be set to the state', () => {

    const action = setTodolistsAC(startState)

    const endState = todolistsReducer([], action);

    expect(endState.length).toBe(2);
});


test('correct entity status of todolist should be changed', () => {

    let newStatus: RequestStatusType = "loading";

    const action = changeTodolistEntityStatusAC(todolistId1,newStatus)

    const endState = todolistsReducer(startState, action);

    expect(endState[0].entityStatus).toBe("loading");
    expect(endState[1].entityStatus).toBe("idle");
});


