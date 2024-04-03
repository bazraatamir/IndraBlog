import { signIn } from "next-auth/react";
function GoogleSignInButton() {
  const HandleClick = () => {
    signIn("google");
  };
  return (
    <button
      className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 my-[20px] rounded-md w-[80%]"
      onClick={() => {
        signIn("google");
      }}
    >
      signIn with google
    </button>
  );
}

export default GoogleSignInButton;
