import {AppStoreType} from "./store";

const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): boolean => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return action.isLoading = true

        default:
            return state.isLoading
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
