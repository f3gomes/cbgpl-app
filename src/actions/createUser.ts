import { api } from "@/services/api";

export const createUser = async (data: any) => {
  try {
    const res = await api.post(`/api/user/new`, data);
    return res;
  } catch (err) {
    return err;
  }
};
