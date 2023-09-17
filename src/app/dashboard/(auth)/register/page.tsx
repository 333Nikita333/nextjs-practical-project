"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorType } from "../../../../../types";

const Register: FC = () => {
  const [error, setError] = useState<ErrorType | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

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
    } catch (error) {
      setError(error as ErrorType);
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
          placeholder="Username"
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          required
        />
        <button className={styles.button} type="submit">
          Register
        </button>
        {error && "Something went wrong!"}
      </form>
      <span>- OR -</span>
      <Link href="/dashboard/login">Login with an existing Account</Link>
    </div>
  );
};

export default Register;
