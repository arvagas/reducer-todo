export const initialState = {
    tasks: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Summon Cthulu',
        completed: false,
        id: 5037583920
    },
]}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            const newTask = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state, 
                tasks: [...state.tasks, newTask]
            }
        case 'TOGGLE':
            return state
        case 'CLEARr':
            return state
        default:
            return state
    }
}
