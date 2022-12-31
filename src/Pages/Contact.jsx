import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [msgLength, setMsgLength] = useState(0);

  const handleSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      e.preventDefault();
      if (!name || !message) {
        toast.error("Please fill all the fields");
        return;
      }
      emailjs
        .send(
          "service_zsw27t8",
          "template_fb4vztj",
          {
            from_name: name,
            message: message,

            email: user ? user.email : name,
          },
          "tCHlzcE0KIYaaoDg1"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Message Sent");
      setName("");
      setMessage("");
      setMsgLength(0);
    } catch (err) {
      console.log(err);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMsgLength(e.target.value.length);
  };
  return (
    <div>
      <div className={`flex h-full flex-col  items-center gap-y-4 `}>
        <div className="w-full text-left h-full flex flex-col gap-y-3 px-4 lg:px-0">
          <label className="text-lg">Name</label>
          <input
            id="ContactName"
            className="p-2 py-4 rounded-md border-2"
            placeholder="Name"
            value={name}
            autoComplete="off"
            onChange={handleName}
          />
          <div className="my-2">
            <div className="flex justify-between ">
              <p className="text-lg">Type a message</p>
              <p className="text-sm font-bold">{msgLength}/500</p>
            </div>
            <div className="relative w-full">
              <textarea
                className="w-full p-2 py-4 rounded-md border-2 resize-none"
                rows={10}
                cols={6}
                maxLength={500}
                style={{ textDecoration: "hidden" }}
                placeholder="Enter your message here"
                value={message}
                onChange={handleMessage}
              />
              {msgLength === 500 && (
                <p className="text-red-600">Max Length Reached</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="p-4 rounded-md bg-white hover:bg-gray-300"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
