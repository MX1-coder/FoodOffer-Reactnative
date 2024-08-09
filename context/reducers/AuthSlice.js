import { createSlice } from "@reduxjs/toolkit";
import {
  Get_Created_Post,
  Logout,
  me,
  Signin_user,
  SignUp_user,
} from "../Actions/Authactions";
// import { toast } from "react-toastify";

let initialState = {
  user: [],
  userType: null,
  isAuthenticated: false,
  token: null,
  loading: false,
  Data:[]
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignUp_user.pending, (state) => {
        state.loading = true;
      })
      .addCase(SignUp_user.fulfilled, (state, action) => {
        // console.log(action.payload, "--------------actions.payload");
        if (action.payload && action.payload.data) {
          state.user = action.payload.data;
          state.userType = action.payload.data.UserType;
          state.isAuthenticated = true;
          state.token = action.payload.token;
          state.loading = false;
        } else {
          //   toast.error(action.payload, {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //   });
        }
      })
      .addCase(SignUp_user.rejected, (state) => {
        state.loading = false;
      })
      //   ----------me
      .addCase(me.pending, (state) => {
        state.loading = true;
      })
      .addCase(me.fulfilled, (state, action) => {
        // console.log(action.payload, "--------------actions.payload");
        if (action.payload && action.payload.data) {
          state.user = action.payload.data;
          state.userType = action.payload.data.UserType;
          state.isAuthenticated = true;
          state.token = action.payload.token;
          state.loading = false;
        } else {
          //   toast.error(action.payload, {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //   });
        }
      })
      .addCase(me.rejected, (state) => {
        state.loading = false;
      })
      // -------------Signin_user
      .addCase(Signin_user.pending, (state) => {
        state.loading = true;
      })
      .addCase(Signin_user.fulfilled, (state, action) => {
        // console.log(action.payload, "--------------actions.payload");
        if (action.payload && action.payload.data) {
          state.user = action.payload.data;
          state.userType = action.payload.data.UserType;
          state.isAuthenticated = true;
          state.token = action.payload.token;
          state.loading = false;
        } else {
          //   toast.error(action.payload, {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //   });
        }
      })
      .addCase(Signin_user.rejected, (state) => {
        state.loading = false;
      })
      // Logout---------------------
      .addCase(Logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(Logout.fulfilled, (state, action) => {
        console.log(" Logout slice --------------actions.payload");
        if (action.payload && action.payload) {
          state.user = [];
          state.userType = null;
          state.isAuthenticated = false;
          state.token = null;
          state.loading = false;
        } else {
          //   toast.error(action.payload, {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //   });
        }
      })
      .addCase(Logout.rejected, (state) => {
        state.loading = false;
      })
      // ----------------------------Get_Created_Post
      .addCase(Get_Created_Post.pending, (state) => {
        state.loading = true;
      })
      .addCase(Get_Created_Post.fulfilled, (state, action) => {
        console.log("important  --------------actions.payload");
        if (action.payload && action.payload.data) {
          state.Data = action.payload.data.ALl_Post;
          state.loading = false;
        } else {
          //   toast.error(action.payload, {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //   });
        }
      })
      .addCase(Get_Created_Post.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
