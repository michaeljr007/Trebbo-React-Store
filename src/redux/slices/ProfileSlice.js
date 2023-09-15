import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: [],
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
