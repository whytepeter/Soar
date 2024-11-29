export interface UserDetails {
  id: string;
  full_name: string;
  email: string;
  user_name: string;
  password: string;
  postal_code: string;
  dob: string;
  city: string;
  country: string;
  permanent_address: string;
  present_address: string;
  pfp: string | null;
}

export interface CreditCards {
  id: string;
  cardHolderName: string;
  cardNumber: string;
  expiryDate: string;
  cardType: string;
  balance: number;
  isActive: boolean;
}

export interface Transaction {
  id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  method: "CARD" | "PAYPAL" | "TRANSFER";
  type: "CREDIT" | "DEBIT";
  amount: number;
}
