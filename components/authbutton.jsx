import { signIn } from "next-auth/react";
function GoogleSignInButton() {
  const HandleClick = () => {
    signIn("google");
  };
  return (
    <button
      onClick={() => {
        signIn("google");
      }}
    >
      signIn with google
    </button>
  );
}

export default GoogleSignInButton;
