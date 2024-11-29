// Utility to generate random values within a range
const getRandomValue = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Mock API for daily transaction data for the current week
export const getActivitiesChart = async (): Promise<{
  success: boolean;
  data: { day: string; deposit: number; withdrawal: number }[];
}> => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = daysOfWeek.map((day) => ({
    day,
    deposit: getRandomValue(50, 500), // Random deposit value
    withdrawal: getRandomValue(20, 300), // Random withdrawal value
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 500); // Simulate API delay
  });
};

// Mock API for monthly balance history for the current year
export const getBalanceHistory = async (): Promise<{
  success: boolean;
  data: { month: string; balance: number }[];
}> => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = new Date().getMonth() + 1; // 0-based month
  const data = months.slice(0, currentMonth).map((month, index) => ({
    month,
    balance: getRandomValue(1000, 10000) + index * 200, // Incrementally increasing balance
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 500); // Simulate API delay
  });
};

// Mock API for expense statistics
export const getExpenseStats = async (): Promise<{
  success: boolean;
  data: { category: string; percentage: number }[];
}> => {
  const data = [
    { category: "Entertainment", percentage: 30 },
    { category: "Investment", percentage: 20 },
    { category: "Bill Expense", percentage: 15 },
    { category: "Other", percentage: 35 },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 500); // Simulate API delay
  });
};
