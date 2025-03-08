import { api } from "@/services/api";

export const updateUser = async (data: any) => {
  let token = null;

  if (typeof window !== "undefined") {
    const userFromStorage = await JSON.parse(
      window.localStorage.getItem("gtxp-user")!,
    );

    token = userFromStorage?.token;
  }

  try {
    const res = await api.patch(`/api/posts/edit`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
