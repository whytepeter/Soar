import { UserDetails } from "@/types";

const mockUserDatabase: UserDetails = {
  id: "123",
  full_name: "John Doe",
  email: "john.doe@example.com",
  user_name: "johndoe",
  password: "password123",
  postal_code: "12345",
  city: "New York",
  dob: "2000-11-21",
  country: "United States of America",
  permanent_address: "123 Permanent St.",
  present_address: "456 Present Ave.",
  pfp: null,
};

// Mock API to update user information
export const updateUser = async (
  userData: Partial<UserDetails>
): Promise<{ success: boolean; data: Record<string, any> }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock successful update
      const isSuccess = true;

      if (isSuccess) {
        resolve({
          success: true,
          data: {
            ...userData, // Return updated user data
          },
        });
      } else {
        reject({
          success: false,
          message: "Failed to update user information.",
        });
      }
    }, 1000); // Simulate API delay
  });
};

export const getUser = async (): Promise<{
  success: boolean;
  data: UserDetails;
}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockUserDatabase) {
        resolve({
          success: true,
          data: { ...mockUserDatabase },
        });
      } else {
        reject({
          success: false,
          message: "User not found.",
        });
      }
    }, 1000);
  });
};
