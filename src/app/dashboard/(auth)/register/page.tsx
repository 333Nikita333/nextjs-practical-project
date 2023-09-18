"use client";
import { FC, FormEventHandler, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorType } from "../../../../../types";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

const Register: FC = () => {
  const [error, setError] = useState<ErrorType | null>(null);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ): Promise<void> => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err as ErrorType);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create an Account</h1>
      <h2>Please sign up to see dashboard</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Username"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className={styles.button} type="submit">
          Register
        </button>
        {error && "Something went wrong!"}
      </form>
      <button onClick={() => signIn("google")}>SignIn with Google</button>
      <span>- OR -</span>
      <Link href="/dashboard/login">Login with an existing Account</Link>
    </div>
  );
};

export default Register;
