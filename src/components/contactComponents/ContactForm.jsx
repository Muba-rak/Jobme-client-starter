import React from "react";
import MyButton from "../MyButton";

const ContactForm = () => {
  return (
    <div
      className="bg-info-subtle mx-auto rounded-4"
      style={{ maxWidth: "950px" }}
    >
      <form className="p-4">
        <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-2">
          <input
            type="text"
            placeholder="Name*"
            className="form-control shadow-none p-3 rounded-4"
          />
          <input
            type="email"
            placeholder="Email*"
            className="form-control shadow-none p-3 rounded-4"
          />
        </div>
        <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-3">
          <input
            type="tel"
            placeholder="Phone Number*"
            className="form-control shadow-none p-3 rounded-4"
          />
          <input
            type="text"
            placeholder="Subject*"
            className="form-control shadow-none p-3 rounded-4"
          />
        </div>
        <div className="my-3">
          <textarea
            placeholder="Message*"
            className="w-100 rounded-4 shadow-none form-control"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <MyButton content={"Send Message"} extraClass={"w-100 p-2 rounded-4"} />
      </form>
    </div>
  );
};

export default ContactForm;
