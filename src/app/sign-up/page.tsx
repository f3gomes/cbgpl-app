import SignUpForm from "@/components/custom/sign-up-form";

export default function SignUp() {
  return (
    <div className="container mx-auto py-10 px-4 flex flex-col justify-center items-center">
      <h1 className="mb-6 text-2xl font-bold">Crie uma nova conta</h1>
      <SignUpForm />
    </div>
  );
}
