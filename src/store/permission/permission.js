import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPermissions = createAsyncThunk(
  "permission/permissions",
  async (value) => {
    return await new Promise((resolve, reject) => {
      console.log("执行一次");
      setTimeout(() => {
        // resolve([
        //   "home",
        //   "table",
        //   "table:basic",
        //   "table:step",
        //   "table:advanced",
        //   "result",
        //   "result:success",
        //   "result:failure",
        //   "exception",
        //   "exception:error",
        //   "exception:not-found",
        //   "exception:forbidden",
        // ]);
        reject("error");
      }, 5000);
    });
  }
);

export const permissionSlice = createSlice({
  name: "permission",
  initialState: {
    permissions: [],
    status: "blocking",
  },
  reducers: {
    SET_PERMISSIONS: (state, action) => {
      state.permissions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPermissions.pending,(state) => {
        state.status = "pending";
      })
      .addCase(getPermissions.fulfilled, (state, action) => {
        state.permissions = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getPermissions.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export const { SET_PERMISSIONS, SetPermissions } = permissionSlice.actions;
export default permissionSlice.reducer;
