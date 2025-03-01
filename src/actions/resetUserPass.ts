import { api } from "@/services/api";

export const resetUserPassword = async (id: string, data: any) => {
  try {
    const res = await api.patch(`/api/user/reset/${id}`, data);
    return res;
  } catch (err) {
    return err;
  }
};
