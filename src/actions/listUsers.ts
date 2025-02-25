import { User } from "@/interfaces/user";
import { api } from "@/services/api";

export const listUsers = async () => {
  let token = null;

  if (typeof window !== "undefined") {
    const userFromStorage = await JSON.parse(
      window.localStorage.getItem("gtxp-user")!,
    );

    token = userFromStorage?.token;
  }

  try {
    const res: User[] = await api.get(`/api/user/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res as User[];
  } catch (err) {
    return err;
  }
};
