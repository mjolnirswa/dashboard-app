export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAN_FILTER = 'CLEAN_FILTER';

export const addFilter = (filter) => ({
    type: ADD_FILTER,
    filter,
})

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter,
})

export const cleanFilter = {
    type: CLEAN_FILTER
}
