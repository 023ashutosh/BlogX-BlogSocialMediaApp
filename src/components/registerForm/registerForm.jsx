"use client";

import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { login, register } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="url" placeholder="Image URL" name="img" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Password Again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Already have an account ? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
