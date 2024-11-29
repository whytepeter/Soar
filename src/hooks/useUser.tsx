import { useCallback } from "react";
import { editUser, setUserState } from "@/store/slices/userSlice";
import { useAppDispatch, useAppSelector } from ".";
import { getUser, updateUser } from "@/lib/api/user";
import { getUserCards } from "@/lib/api/cards";
import { UserDetails } from "@/types";

interface Props {
  user: UserDetails | null;
  fetchUser: () => Promise<void>;
  fetchUserCards: () => Promise<void>;
  updateUserDetails: (userData: Partial<UserDetails>) => Promise<void>;
}

export const useUser = (): Props => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.userDetails);

  // Fetch user details
  const fetchUser = useCallback(async () => {
    try {
      const response = await getUser();
      if (response.success) {
        dispatch(setUserState({ userDetails: response.data }));
      } else {
        throw new Error("Failed to fetch user data.");
      }
    } catch (err) {
      throw err;
    }
  }, [dispatch]);

  // Update user details
  const updateUserDetails = useCallback(
    async (userData: Partial<UserDetails>) => {
      try {
        const response = await updateUser(userData);
        if (response.success) {
          dispatch(editUser(response.data));
        } else {
          throw new Error("Failed to udpate user data.");
        }
      } catch (err) {
        throw err;
      }
    },
    [dispatch]
  );

  //Fetch user card details
  const fetchUserCards = useCallback(async () => {
    try {
      const response = await getUserCards();
      if (response.success) {
        dispatch(setUserState({ cards: response.data }));
      } else {
        throw new Error("Failed to fetch user cards.");
      }
    } catch (err) {
      throw err;
    }
  }, [dispatch]);

  return {
    user,
    fetchUser,
    updateUserDetails,
    fetchUserCards,
  };
};
