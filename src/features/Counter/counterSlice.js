import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers:{
        increase(state, action) {
            return state + 1;
        },
        
        decrease(state, action) {
            return state - 1;
        },
    }
});

export const { increase,decrease } = counterSlice.actions;

export default counterSlice.reducer;