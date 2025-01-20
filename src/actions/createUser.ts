import { api } from "@/services/api";

// eslint-disable-next-line
export const createUser = async (data: any) => {
  try {
    const res = await api.post(`/api/user/new`, data);
    return res;

    // eslint-disable-next-line
  } catch (err: any) {
    return err.response.data;
  }
};
