export const SET_FILTER = 'SET_FILTER'

export function setFilter(filter) {
    return{
        type: 'SET_FILTER',
        filter
    }
}

export default (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
         return action.filter
        default:
        return state
    }
}