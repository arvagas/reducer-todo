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
    {
        item: 'Understand Quantum Mechanics',
        completed: true,
        id: 4023748374
    },
]}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state, 
                tasks: [...state.tasks, newItem]
            }
        case 'TOGGLE_ITEM':
            return state
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.filter(item => !item.completed)
            }
        default:
            return state
    }
}
