import { api } from "@/services/api";

export const getUserByEmail = async (email: string) => {
  let token = null;

  if (typeof window !== "undefined") {
    const userFromStorage = await JSON.parse(
      window.localStorage.getItem("gtxp-user")!,
    );

    token = userFromStorage?.token;
  }

  try {
    const res = await api.get(`/api/user/email/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};
