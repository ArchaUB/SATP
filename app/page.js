"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Placement Training</h1>
        <button
          onClick={() => router.push("/signin")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Get Started
        </button>
        <p className="mt-4">
          Are you a teacher?{" "}
          <button
            onClick={() => router.push("/teacher-signin")}
            className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}
