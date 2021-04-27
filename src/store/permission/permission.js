import {
  createSlice
} from "@reduxjs/toolkit";

export const permissionSlice = createSlice({
  name: "permission",
  initialState: {
    permissions: []
  },
  reducers: {
    SET_PERMISSIONS: (state, action) => {
      state.permissions = action.payload;
    }
  }
});
export default permissionSlice.reducer;
