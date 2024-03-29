"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        console.log("aldaa");
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log("aldaa", error);
    }
  };

  return <></>;
}

export default Login;
