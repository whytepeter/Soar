// Mock database for credit cards
const mockCards = [
  {
    id: "card1",
    cardHolderName: "John Doe",
    cardNumber: "4111 1111 1111 1111",
    expiryDate: "01/26",
    cardType: "VISA",
  },
  {
    id: "card2",
    cardHolderName: "John Doe",
    cardNumber: "5500 0000 0000 0004",
    expiryDate: "06/25",
    cardType: "MASTERCARD",
  },
  {
    id: "card3",
    cardHolderName: "John Doe",
    cardNumber: "3400 0000 0000 009",
    expiryDate: "12/24",
    cardType: "AMEX",
  },
];

// Mock API to get user credit card details
export const getUserCards = async (): Promise<{
  success: boolean;
  data: typeof mockCards;
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
    }, 500); // Simulate API delay
  });
};
