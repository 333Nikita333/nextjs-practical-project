"use client";
import { FC, FormEventHandler } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

const Login: FC = () => {
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
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("dashboard");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit" className={styles.button}>
          LogIn
        </button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
      <span> -OR- </span>
      <Link className={styles.register} href="/dashboard/register">Register</Link>
    </div>
  );
};

export default Login;
