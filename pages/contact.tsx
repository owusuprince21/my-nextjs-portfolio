import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { PiSpinner } from "react-icons/pi";

interface FormData {
  name: string;
  email: string;
  location: string;
  message: string;
}

const Contact = () => {
  const [form, setFormData] = useState<FormData>({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent, values: FormData) => {
    e.preventDefault();
    const emailData = {
      subject: `${values.name} reached out!`,
      message: `  
      Hello,\n
      A new contact from your portfolio.\n
      Here are the details:\n
      Name: ${values.name}\n
      Email: ${values.email}\n
      Location: ${values.location}\n
      Message:${values.message}\n
    `,
    };
    setLoading(true);
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast.success("Thanks for reaching out! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          location: "",
          message: "",
        });
        setLoading(false);
      } else {
        const errorMessage = await response.text();
        setLoading(false);
        throw new Error(errorMessage || "Request failed");
      }
    } catch (err) {
      console.error("Error", err);
      toast.error("Try Again, Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col py-10">
      <h2 className="text-3xl font-bold mb-2 uppercase tracking-wider gradient-text">
        Contact Me
      </h2>
      <form
        className="text-xl w-full md:max-w-[550px] md:min-w-[550px] py-4 space-y-4"
        onSubmit={(e) => handleSubmit(e, form)}
      >
        <div className="">
          <label htmlFor="name">Name | Company Name</label> <br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>
        <div className="">
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>
        <div className="">
          <label htmlFor="">Location</label> <br />
          <input
            type="address"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>{" "}
        <div className="">
          <label htmlFor="">Message</label> <br />
          <textarea
            cols={10}
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>
        <button
          className="flex items-center  justify-center px-6 w-[200px] cursor-pointer p-3 text-xl  gradient-bg font-bold rounded-full"
          // onClick={goToContact}
        >
          {loading ? <PiSpinner className="animate-spin" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
