import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import {axiosInstance} from '../../Helpers/axiosInstance'
import axiosInstance from '../../Helpers/axiosInstance';


    const initialState = {
        isLoggedIn: localStorage.getItem('isLoggedIn') || false,
        role: localStorage.getItem('role')|| "",
        data:localStorage.getItem('data')|| {}
    };



    export const createAcount = createAsyncThunk("/auth/signup", async(data)=>{
        try {
            const res = axiosInstance.post("user/register", data);
            toast.promise(res,{
                loading: "Wait! create your account",
                success: (data)=>{
                    return data?.data.message;
                },
                error: " Failed to create account "

            });

            return (await res).data;
            
        } catch (error) {
            toast.error(error?.response?.data?.message);
            
        }
    })

    const   authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers:{},
    });

    // export default const {} = authSlice.actions;
    export default authSlice.reducer;