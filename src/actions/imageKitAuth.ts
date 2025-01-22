import axios from "axios";

export const authenticator = async () => {
  try {
    const response = await axios.get("/api/auth");

    if (!response.data) {
      const errorText = await response.data.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.data;
    const { signature, expire, token } = data;

    console.log(data?.token);
    return { signature, expire, token };

    // eslint-disable-next-line
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
