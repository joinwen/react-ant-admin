import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPermissions = createAsyncThunk(
  "permission/permissions",
  async (value) => {
    return await new Promise((resolve) => {
      // setTimeout(() => {
        resolve([
          "home",
          "table",
          "table:basic",
          "table:step",
          "table:advanced",
          "result",
          "result:success",
          "result:failure",
          "exception",
          "exception:error",
          "exception:not-found",
          "exception:forbidden",
        ]);
      // });
    });
  }
);

export const permissionSlice = createSlice({
  name: "permission",
  initialState: {
    permissions: [],
  },
  reducers: {
    SET_PERMISSIONS: (state, action) => {
      state.permissions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPermissions.fulfilled, (state, action) => {
      state.permissions = action.payload;
    });
  },
});
export const { SET_PERMISSIONS, SetPermissions } = permissionSlice.actions;
export default permissionSlice.reducer;
