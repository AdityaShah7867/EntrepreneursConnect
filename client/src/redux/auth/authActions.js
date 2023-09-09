import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/auth/userprofile/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                },

            })
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

//update the user profile
export const updateProfile = createAsyncThunk(
    'user/update',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                'http://localhost:4000/api/v1/auth/editprofile/',
                {
                    username: formData.username,
                    email: formData.email,
                    bio: formData.bio,
                    // image: formData.image,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );

            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data;
            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);


//get logged in user
export const getLoggedInUser = createAsyncThunk(
    'user/getLoggedInUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                'http://localhost:4000/api/v1/auth/loggedinuser/',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
);


export const registerUser = createAsyncThunk(
    'user/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/v1/auth/register/',
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }
            );

            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data.user;
            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

// Define your async thunk for user login
export const loginUser = createAsyncThunk(
    'user/login',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/v1/auth/login/',
                {
                    email: user.email,
                    password: user.password,
                }
            );

            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                localStorage.setItem('authtoken', response.data.token);
                return response.data;
            } else {
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);



