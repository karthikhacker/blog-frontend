import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginApi, logoutApi, signupApi } from "../api/userApi";
import { toast } from "react-toastify";

export const login = createAsyncThunk('login', async (data, thunkAPI) => {
    try {
        const { userData, navigate } = data;
        const response = await axios.post(`${loginApi}`, userData, navigate);
        toast.success(response.data.message)
        navigate('/');
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
        return thunkAPI.rejectWithValue(error.response.data.message)
    }

})
export const signup = createAsyncThunk('signup', async (userData, thunkAPI) => {
    try {
        const response = await axios.post(`${signupApi}`, userData);
        toast.success(response.data.message);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
        return thunkAPI.rejectWithValue(error.response.data.message)

    }
})
export const logoutUser = createAsyncThunk('logout', async (thunkAPI) => {
    try {
        const response = await axios.get(`${logoutApi}`);
        toast.success(response.data.message)
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
        return thunkAPI.rejectWithValue(error.response.data.message)

    }
})
const initialState = {
    loading: false,
    message: "",
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    err: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            state.message = action.payload.message;
            state.err = null;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.err = action.payload;
        })
        builder.addCase(signup.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.user = action.payload.data;
            localStorage.setItem('user', JSON.stringify(action.payload.data))
            state.err = null;
        })
        builder.addCase(signup.rejected, (state, action) => {
            state.loading = false;
            state.err = action.payload;
            state.message = "";
            state.user = null;
        })
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            localStorage.removeItem('user');
            state.message = ""
        })
    }
})
export default authSlice.reducer