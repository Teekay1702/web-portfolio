import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import Button from "./Button";
import Icon from "./Icon";
import SuccessMessage from "./SuccessMessage";

import type {
  ContactFormData,
} from "../types/contact";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] =
    useState(INITIAL_FORM);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  function handleChange(
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      /*
       Replace this later with:

       await emailjs.send(...)

       OR

       fetch("/api/contact")

       OR

       Resend

       OR

       Supabase Edge Function

      */

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setSuccess(true);

      setForm(INITIAL_FORM);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <SuccessMessage
        onReset={() =>
          setSuccess(false)
        }
      />
    );
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>

        Your Name

        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
        />

      </label>

      <label>

        Email Address

        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

      </label>

      <label>

        Message

        <textarea
          rows={5}
          required
          name="message"
          value={form.message}
          onChange={handleChange}
        />

      </label>

      <Button
        type="submit"
        disabled={loading}
        icon={<Icon name="send" />}
      >
        {loading
          ? "Sending..."
          : "Send Message"}
      </Button>

    </form>
  );
}