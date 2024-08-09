import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helpers/axiosconfig";

// ACTIONS : api calls

// --------------------------------------------------------------------------------- auth  --------
//Sign Up
export const SignUp_user = createAsyncThunk(
  "auth/SignUp_user",
  async (formData) => {
    try {
      // console.log("formdata at the action payload  " , formData)
      const response = await axios.post(`SignUp_user`, formData);
      // console.log(response.data.token , "----------- response -----------------------------------");
      return response.data;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

// me;
export const me = createAsyncThunk("auth/me", async (token) => {
  try {
    const response = await axios.post(`me`, token);
    // console.log(
    //   response,
    //   "----------- response -----------------------------------"
    // );
    return response.data;
  } catch (error) {
    // console.log(error.response.data.message);
    return error.response.data.message;
  }
});

//SignIN

export const Signin_user = createAsyncThunk(
  "auth/Signin_user",
  async (formData) => {
    try {
      const response = await axios.post(`Signin_user`, formData);
      // console.log(
      //   response,
      //   "----------- response -----------------------------------"
      // );
      return response.data;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

//
export const Logout = createAsyncThunk("auth/Logout", async () => {
  try {
    // const response = await axios.post(`Signin_user`, formData);
    const response = null;
    // console.log(
    //   response,
    //   "----------- response -----------------------------------"
    // );
    return response;
  } catch (error) {
    // console.log(error.response.data.message);
    return error.response.data.message;
  }
});

export const Get_Created_Post = createAsyncThunk("auth/Get_Created_Post", async () => {
  try {
    const response = await axios.get(`Get_Created_Post`);

    console.log(
      response,
      "----------- response -----------------------------------"
    );
    return response;
  } catch (error) {
    // console.log(error.response.data.message);
    return error.response.data.message;
  }
});
