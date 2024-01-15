import { createSlice } from "@reduxjs/toolkit";

    const initialSate = {
        isLoggedIn: localStorage.getItem('isLoggedIn') || false,
        role: localStorage.getItem('role')|| "",
        data:localStorage.getItem('data')|| {}
    };

    const   authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers:{},
    });

    // export default const {} = authSlice.actions;
    export default authSlice.reducer;