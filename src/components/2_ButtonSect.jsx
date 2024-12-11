import React, { useState } from "react";

const ButtonSect = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address");
      setSuccess(""); // Clear success message if there's an error
    } else {
      setError(""); // Clear error
      setSuccess("Notify Successful! Please check your email."); // Set success message
    }
  };

  return (
    <section
      aria-labelledby="email-section"
      className="w-full flex flex-col items-center"
    >
      <h2 id="email-section" className="sr-only">
        Email Notification Signup
      </h2>
      <form
        onSubmit={handleValidation}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-libre"
      >
        <label
          htmlFor="emailInput"
          className="flex flex-col content-center w-full"
        >
          <input
            className="btn text-neutral-veryDarkBlue bg-transparent
              border border-neutral-gray transition-all duration-700
              placeholder:text-neutral-gray placeholder:text-lg
              focus:ring-blue-500 focus:border-blue-50"
            type="email"
            placeholder="Your Email Address"
            name="emailInput"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <span className="text-md sm:text-base ms-6 italic text-secondary-lightRed mt-3">
              {error}
            </span>
          )}
          {success && (
            <span className="text-md sm:text-base ms-6 italic text-secondary-lightGreen mt-3">
              {success}
            </span>
          )}
        </label>

        <label htmlFor="submitBtn">
          <button
            className="btn btn-primary shadow-xl hover:bg-primary-hover transition-all duration-700"
            type="submit"
          >
            Notify Me
          </button>
        </label>
      </form>
    </section>
  );
};

export default ButtonSect;
