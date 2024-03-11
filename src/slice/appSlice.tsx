import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
    taskList: { name: string; completed: boolean }[];
}

const initialState: TaskState = {
    taskList: [],
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.taskList.push({ name: action.payload, completed: false });
        },
        deleteTask: (state, action) => {
            state.taskList.splice(action.payload, 1);
        },
        completeTask: (state, action) => {
            state.taskList[action.payload].completed = true;
        },
    },
});

export const { addTask, deleteTask, completeTask } = appSlice.actions;
export default appSlice.reducer;
