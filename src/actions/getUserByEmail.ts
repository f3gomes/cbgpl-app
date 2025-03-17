import { api } from "@/services/api";

export const getUserByEmail = async (email: string) => {
  try {
    const res = await api.get(`/api/user/email/${email}`);
    return res;
  } catch (err) {
    return err;
  }
};
