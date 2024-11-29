import { CreditCards } from "@/types";

const mockCards: CreditCards[] = [
  {
    id: "card1",
    cardHolderName: "John Doe",
    cardNumber: "4111 1111 1111 1111",
    expiryDate: "01/26",
    cardType: "VISA",
    balance: 5756,
    isActive: true,
  },
  {
    id: "card2",
    cardHolderName: "John Doe",
    cardNumber: "5500 0000 0000 0004",
    expiryDate: "06/25",
    cardType: "MASTERCARD",
    balance: 7000,
    isActive: false,
  },
  {
    id: "card3",
    cardHolderName: "John Doe",
    cardNumber: "3400 0000 0000 009",
    expiryDate: "12/24",
    cardType: "AMEX",
    balance: 150,
    isActive: false,
  },
];

export const getUserCards = async (): Promise<{
  success: boolean;
  data: CreditCards[];
}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockCards) {
        resolve({
          success: true,
          data: mockCards,
        });
      } else {
        reject({
          success: false,
          message: "No cards found.",
        });
      }
    }, 1000);
  });
};
