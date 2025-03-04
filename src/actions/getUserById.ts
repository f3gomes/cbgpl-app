import { api } from "@/services/api";

export const getUserById = async (id: string) => {
  try {
    const res = await api.get(`/api/user/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};
