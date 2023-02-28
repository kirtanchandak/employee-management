import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false },
};
export const ReducerSlice = createSlice({
  name: "CRUD App",
  initialState,
  reducers: {
    toggleChangeAction: (state, action) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
  },
});

export const { toggleChangeAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
