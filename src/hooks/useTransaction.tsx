import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { Transaction, UserDetails } from "@/types";
import { getBeneficiary, getTransactions } from "@/lib/api/transaction";
import { setTransactionState } from "@/store/slices/transactionSlice";

interface Props {
  transactions: Transaction[];
  beneficiaries: UserDetails[];
  loading: boolean;
  fetchTransaction: () => void;
  fetchBeneficiaries: () => void;
}

export const useTransaction = (): Props => {
  const dispatch = useAppDispatch();

  const transactions = useAppSelector(
    (state) => state.transaction.transactions
  );
  const beneficiaries = useAppSelector(
    (state) => state.transaction.beneficiaries
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

  // Fetch beneficiary details
  const fetchBeneficiaries = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getBeneficiary();
      if (response.success) {
        dispatch(setTransactionState({ beneficiaries: response.data }));
      } else {
        throw new Error("Failed to fetch beneficiary data.");
      }
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return {
    transactions,
    beneficiaries,
    loading,
    fetchTransaction,
    fetchBeneficiaries,
  };
};
