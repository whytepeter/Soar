import { useCallback, useState } from "react";
import { editUser, setUserState } from "@/store/slices/userSlice";
import { useAppDispatch, useAppSelector } from ".";
import { getUser, updateUser } from "@/lib/api/user";
import { getUserCards } from "@/lib/api/cards";
import { UserDetails } from "@/types";
import { CreditCards } from "@/components/dashboard/cards/CreditCard";

interface Props {
  user: UserDetails | null;
  cards: CreditCards[];
  loading: boolean;
  fetchUser: () => Promise<void>;
  fetchUserCards: () => Promise<void>;
  updateUserDetails: (userData: Partial<UserDetails>) => Promise<void>;
}

export const useUser = (): Props => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.userDetails);
  const cards = useAppSelector((state) => state.user.cards);

  const [loading, setLoading] = useState(false);

  // Fetch user details
  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getUser();
      if (response.success) {
        dispatch(setUserState({ userDetails: response.data }));
      } else {
        throw new Error("Failed to fetch user data.");
      }
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  // Update user details
  const updateUserDetails = useCallback(
    async (userData: Partial<UserDetails>) => {
      try {
        setLoading(true);
        const response = await updateUser(userData);
        if (response.success) {
          dispatch(editUser(response.data));
        } else {
          throw new Error("Failed to udpate user data.");
        }
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  //Fetch user card details
  const fetchUserCards = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getUserCards();
      if (response.success) {
        dispatch(setUserState({ cards: response.data }));
      } else {
        throw new Error("Failed to fetch user cards.");
      }
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return {
    user,
    cards,
    loading,
    fetchUser,
    updateUserDetails,
    fetchUserCards,
  };
};
