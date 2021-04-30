import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ACCESS_TOKEN} from "../../config/globalConfig";

export const getPermissions = createAsyncThunk(
  "user/permissions",
  async (value) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        import("../../back/userInfo.json")
          .then(res => {
            resolve((JSON.parse(JSON.stringify(res))));
          })
          .catch(error => {
            reject(error);
          })
      }, 1000);
    });
  }
);

export const Login = data => dispatch => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let {username, password} = data;
      if(username && password && username !== "admin") {
        localStorage.setItem(ACCESS_TOKEN, Date.now());
        resolve(true);
      } else {
        reject(false);
      }
    })
  })
}

export const Logout = () => dispatch => {
  dispatch(SET_STATUS("blocking"));
  localStorage.clear();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try{
        resolve();
      }catch (e) {
        reject(e);
      }
    })
  })
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    nickname: "",
    userInfo: null,
    permissions: [],
    status: "blocking",
  },
  reducers: {
    SET_PERMISSIONS: (state, action) => {
      state.permissions = action.payload;
    },
    SET_STATUS: (state, action) => {
      state.status = action.payload;
    },
    SET_NICKNAME:(state, action) => {
      state.nickname = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPermissions.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getPermissions.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.permissions = action.payload.permissions;
        state.nickname = "范巴斯藤";
        state.status = "fulfilled";
      })
      .addCase(getPermissions.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export const { SET_STATUS, SET_NICKNAME } = userSlice.actions;
export default userSlice.reducer;
