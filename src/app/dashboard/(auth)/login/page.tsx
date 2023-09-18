"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler } from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    signIn("credentials", { email, password });
  };

  if (session.status === "loading") {
    return <p>Loading</p>;
  }
  if (session.status === "authenticated") {
    router?.push("dashboard");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="email" placeholder="Email" />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <button className={styles.button}>LogIn</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
