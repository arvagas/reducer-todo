export const initialState = {
    tasks: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
        deadline: 'August 13, 2019'
    },
    {
        item: 'Summon Cthulu',
        completed: false,
        id: 5037583920,
        deadline: 'February 29, 1928'
    },
    {
        item: 'Understand Quantum Mechanics',
        completed: true,
        id: 4023748374,
        deadline: 'May 28, 2019'
    },
    {
        item: 'Job Hunting',
        completed: false,
        id: 3246546524,
        deadline: 'December 31, 2019'
    },
]}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
                deadline: 'December 31, 2019' // Placeholder until a drop system is implemented in form
            }
            return {
                ...state, 
                tasks: [...state.tasks, newItem]
            }

        case 'TOGGLE_ITEM':
            return {
                ...state, 
                tasks: state.tasks.map(item => {
                    if (action.payload === item.id) return {...item, completed: !item.completed}
                    else return item
                })
            }

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.filter(item => !item.completed)
            }

        default:
            return state
    }
}
