import { api } from "@/services/api";

export const listSpeakers = async () => {
  let token = null;

  if (typeof window !== "undefined") {
    const userFromStorage = await JSON.parse(
      window.localStorage.getItem("gtxp-user")!,
    );

    token = userFromStorage?.token;
  }

  try {
    const res: any[] = await api.get(`/api/speaker/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};
