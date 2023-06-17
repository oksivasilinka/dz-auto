import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            return state.map(el => ({...el})).sort(function (a, b) {
                if (action.payload === 'up') {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                } else {
                    if (b.name > a.name) {
                        return 1;
                    }
                    if (b.name < a.name) {
                        return -1;
                    }
                    return 0;
                }

            });
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
