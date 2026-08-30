import axios from "axios";

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/user/me",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    return null;
  }
};