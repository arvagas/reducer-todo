import moment from 'moment'

export const initialState = {
    tasks: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
        completedDate: '',
        deadline: '2019-08-13'
    },
    {
        item: 'Summon Cthulu',
        completed: false,
        id: 5037583920,
        completedDate: '',
        deadline: '1928-02-29'
    },
    {
        item: 'Understand Quantum Mechanics',
        completed: true,
        id: 4023748374,
        completedDate: '2019-05-27',
        deadline: '2019-05-28'
    },
    {
        item: 'Job Hunting',
        completed: false,
        id: 3246546524,
        completedDate: '',
        deadline: '2019-12-31'
    },
]}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
                completedDate: '',
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
                    if (action.payload === item.id) return {
                        ...item,
                        completed: !item.completed,
                        completedDate: !item.completed ? moment().format('MMMM D, YYYY') : ''
                    }
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
