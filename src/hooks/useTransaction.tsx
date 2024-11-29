import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { Transaction } from "@/types";
import { getTransactions } from "@/lib/api/transaction";
import { setTransactionState } from "@/store/slices/transactionSlice";

interface Props {
  transactions: Transaction[];
  loading: boolean;
  fetchTransaction: () => void;
}

export const useTransaction = (): Props => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(
    (state) => state.transaction.transactions
  );

  const [loading, setLoading] = useState(false);

  // Fetch transaction details
  const fetchTransaction = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getTransactions();
      if (response.success) {
        dispatch(setTransactionState({ transactions: response.data }));
      } else {
        throw new Error("Failed to fetch transaction data.");
      }
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return {
    transactions,
    loading,
    fetchTransaction,
  };
};
