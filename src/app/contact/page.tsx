"use client";

import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section id="contact" className="h-screen w-full bg-blue-500">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact</h1>
          <form
            className="flex w-3/4 max-w-md flex-col gap-4"
            // action="https://formspree.io/f/mayvlrjd"
            // sample formspree endpoint
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded p-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="rounded p-2"
            />
            <button
              type="submit"
              className="rounded bg-white px-4 py-2 font-bold text-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
