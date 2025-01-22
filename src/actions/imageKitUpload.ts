import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
  privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT as string,
});

// eslint-disable-next-line
export const uploadImage = async (file: any) => {
  try {
    const res = await imagekit.upload({ file, fileName: "gtxp-user" });
    return res;
  } catch (err) {
    console.log(err);
  }
};
