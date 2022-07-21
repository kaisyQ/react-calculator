const ADD_LOG = 'ADD-LOG'
const DELETE_LOG = 'DELETE-LOG'

export function addLogAC(newLog) {
    return {
        type: ADD_LOG,
        newLog
    }
}

export function deleteLogAC(toDeleteLog) {
    return {
        type: DELETE_LOG,
        toDeleteLog
    }
}

function logsReducer(state, action) {
    switch (action.type) {
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.newLog],
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.log.filter(log => log !== action.toDeleteLog)
            }
        default:
            throw new Error();
    }
}

export default logsReducer