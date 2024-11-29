import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDetails {
  id: string;
  full_name: string;
  email: string;
  user_name: string;
  password: string;
  postal_code: string;
  city: string;
  country: string;
  permanent_address: string;
  present_address: string;
  pfp: string | null;
}

interface UserState {
  userDetails: UserDetails | null;
}

const initialState: UserState = {
  userDetails: {
    id: "123",
    full_name: "John Doe",
    email: "john.doe@example.com",
    user_name: "johndoe",
    password: "password123",
    postal_code: "12345",
    city: "New York",
    country: "USA",
    permanent_address: "123 Permanent St.",
    present_address: "456 Present Ave.",
    pfp: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set the entire state
    setUser: (state, action: PayloadAction<UserDetails>) => {
      state.userDetails = action.payload;
    },

    // Update multiple user details
    editUser: (state, action: PayloadAction<Partial<UserDetails>>) => {
      if (state.userDetails) {
        state.userDetails = { ...state.userDetails, ...action.payload };
      }
    },
    // Update profile picture specifically
    updateProfilePicture: (state, action: PayloadAction<string>) => {
      if (state.userDetails) {
        state.userDetails.pfp = action.payload;
      }
    },
  },
});

export const { editUser, updateProfilePicture, setUser } = userSlice.actions;
export default userSlice.reducer;
