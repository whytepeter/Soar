import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user details type
interface UserDetails {
  id: string;
  name: string;
  email: string;
}

// Define the initial state
interface UserState {
  userDetails: UserDetails | null;
}

const initialState: UserState = {
  userDetails: {
    id: "123",
    name: "John Doe",
    email: "john.doe@example.com",
  }, // Default user details (optional)
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<Partial<UserDetails>>) => {
      if (state.userDetails) {
        // Update only provided fields
        state.userDetails = { ...state.userDetails, ...action.payload };
      }
    },
    removeUser: (state) => {
      state.userDetails = null;
    },
  },
});

export const { editUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
