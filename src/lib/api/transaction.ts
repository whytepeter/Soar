// Mock database for transactions
const mockTransactions = [
  {
    id: "1",
    description: "Deposit from my Card",
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z",
    method: "CARD",
    type: "CREDIT",
    amount: 150.0,
  },
  {
    id: "2",
    description: "Deposit from PayPal",
    createdAt: "2024-01-05T14:30:00Z",
    updatedAt: "2024-01-05T14:30:00Z",
    method: "PAYPAL",
    type: "CREDIT",
    amount: 50.0,
  },
  {
    id: "3",
    description: "Jemi Wilson | Transfer to Friend",
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z",
    method: "TRANSFER",
    type: "DEBIT",
    amount: 20.0,
  },
  {
    id: "4",
    description: "Purchase at Grocery Store",
    createdAt: "2024-01-12T17:45:00Z",
    updatedAt: "2024-01-12T17:45:00Z",
    method: "CARD",
    type: "DEBIT",
    amount: 75.0,
  },
  {
    id: "5",
    description: "Subscription Payment | Spotify",
    createdAt: "2024-01-15T12:00:00Z",
    updatedAt: "2024-01-15T12:00:00Z",
    method: "PAYPAL",
    type: "DEBIT",
    amount: 9.99,
  },
  {
    id: "6",
    description: "Deposit from Bank Transfer",
    createdAt: "2024-01-18T08:30:00Z",
    updatedAt: "2024-01-18T08:30:00Z",
    method: "TRANSFER",
    type: "CREDIT",
    amount: 500.0,
  },
  {
    id: "7",
    description: "Purchase at Electronics Store",
    createdAt: "2024-01-20T15:25:00Z",
    updatedAt: "2024-01-20T15:25:00Z",
    method: "CARD",
    type: "DEBIT",
    amount: 320.0,
  },
  {
    id: "8",
    description: "Refund from Retail Store",
    createdAt: "2024-01-22T11:10:00Z",
    updatedAt: "2024-01-22T11:10:00Z",
    method: "CARD",
    type: "CREDIT",
    amount: 45.0,
  },
  {
    id: "9",
    description: "Online Course Payment",
    createdAt: "2024-01-25T19:00:00Z",
    updatedAt: "2024-01-25T19:00:00Z",
    method: "PAYPAL",
    type: "DEBIT",
    amount: 199.0,
  },
  {
    id: "10",
    description: "Charity Donation",
    createdAt: "2024-01-28T14:45:00Z",
    updatedAt: "2024-01-28T14:45:00Z",
    method: "TRANSFER",
    type: "DEBIT",
    amount: 30.0,
  },
];

// Mock API to get user transactions
export const getTransactions = async (): Promise<{
  success: boolean;
  data: typeof mockTransactions;
}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockTransactions) {
        resolve({
          success: true,
          data: mockTransactions,
        });
      } else {
        reject({
          success: false,
          message: "No transactions found.",
        });
      }
    }, 500); // Simulate API delay
  });
};
