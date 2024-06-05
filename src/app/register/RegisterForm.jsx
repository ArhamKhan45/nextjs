// app/components/RegisterForm.js
"use client";

import { useState } from "react";

const RegisterForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error("An error occurred while registering:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[300px] mx-auto bg-white p-6 rounded shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 font-medium">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-400 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-full"
      >
        Register
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
};

export default RegisterForm;
