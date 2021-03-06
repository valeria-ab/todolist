import { setIsLoggedInAC } from './../features/Login/auth-reducer';
import { Dispatch } from "redux"
import { authAPI } from "../api/todolists-api"
import { handleServerAppError, handleServerNetworkError } from '../utils/error-utils';


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type AppInitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если произойдёт какая-либо глобальная ошибка, мы запишем текст ошибки сюда
    error: null | string
    // true когда приложение пронициализировалось (проверили юзера, получили настройки и т.д.)
    isInitialized: boolean
}

const initialState: AppInitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}



export const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        case 'APP/SET-ERROR':
            return { ...state, error: action.error }
        case "APP/SET-IS-INITIALIZED":
            return { ...state, isInitialized: action.value }
        default:
            return state
    }
}

export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)
export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)
export const setAppInitializedAC = (value: boolean) => ({ type: 'APP/SET-IS-INITIALIZED', value } as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"));
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatusAC("succeeded"));
            } else {
                handleServerAppError(res.data, dispatch);
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch);
          })
          .finally(() => {
            dispatch(setAppStatusAC("idle"));
            dispatch(setAppInitializedAC(true));
          });
}

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>


type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | ReturnType<typeof setAppInitializedAC>