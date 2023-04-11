import React from "react";

const Contact = () => {
  return (
    <div className="p-2 p-md-3 p-lg-4 p-xl-5">
      <h3 className="pb-4">Contact Us</h3>
      <div className="p-2 bg-white rounded-2">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="First and lastname"
              required
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your email"
              required
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="btn py-1 px-4 rounded-3 bg-success text-white fw-bold"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
