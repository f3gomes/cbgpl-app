import { api } from "@/services/api";

export const getSpeakerById = async (id: string) => {
  let token = null;

  if (typeof window !== "undefined") {
    const userFromStorage = await JSON.parse(
      window.localStorage.getItem("gtxp-user")!,
    );

    token = userFromStorage?.token;
  }

  try {
    const res = await api.get(`/api/speaker/find/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
