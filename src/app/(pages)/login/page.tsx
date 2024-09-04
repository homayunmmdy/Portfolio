"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (isAuthenticated) {
      router.push("/");
    }
  }, []);
  const handleLogin = () => {
    const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
    const USERNAME = process.env.NEXT_PUBLIC_USERNAME;
    if (username == `${USERNAME}` && password == `${PASSWORD}`) {
      //@ts-ignore
      localStorage.setItem("auth", true);
      router.push("/");
      toast.success("you're welcome");
    } else {
      toast.error("Invalid username or password");
    }
  };
  return (
    <>
      <Toaster />
      <div className="relative mx-auto w-full max-w-md bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl px-10 m-8 md:my-8 ">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
            <p className="mt-2 text-gray-500">
              This is private part of site if you have access, please enter your
              username and password here
            </p>
          </div>
          <div className="mt-5">
            <form>
              <div className="relative mt-6">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  placeholder="UserName"
                  className="peer mt-1 w-full border-b-2 bg-white border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="username"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  UserName
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 bg-white border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
