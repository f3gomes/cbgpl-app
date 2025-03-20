import { getUserByEmail } from "./getUserByEmail";

export const fetchUser = async (setUser: any) => {
  if (typeof window !== "undefined") {
    const userFromStorage = await JSON.parse(
      window.localStorage.getItem("gtxp-user")!,
    );

    const userData: any = await getUserByEmail(userFromStorage?.email);
    setUser(userData?.data?.updatedUser);
  }
};
