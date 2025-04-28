import { api } from "@/services/api";

export const requestUserPassword = async (data: any) => {
  try {
    const res = await api.patch(`/api/user/reset/request`, data);
    return res;
  } catch (err: any) {
    console.log("Erro ao processar requisição: ", err);
    return err;
  }
};
