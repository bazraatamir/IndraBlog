"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleSignInButton from "./authbutton";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("алдаа гарлаа");
        return;
      }
      router.replac("/");
    } catch (error) {
      console.log("aldaa", error);
    }
  };

  return (
    <>
      <div className="grid place-items-center h-screen md:w-[60%] md:h-[80%] lg:w-[30%] lg:h-[40%]">
        <div className="shadow-lg p-5 flex flex-col rounded-lg border-t-4 border-green-400 w-[100%] h-[100%] items-center justify-center">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-3 w-[80%]">
            <input
              className="my-[20px] p-[10px] rounded-md"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              className="my-[20px] p-[10px] rounded-md"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 my-[20px] rounded-md">
              Login
            </button>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
          </form>
          <GoogleSignInButton />
        </div>
      </div>
    </>
  );
}

export default Login;
