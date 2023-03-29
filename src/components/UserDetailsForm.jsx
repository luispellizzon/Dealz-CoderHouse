import { useState, useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

const UserDetailsForm = () => {
  const { buyer, setOrderBuyer } = useContext(OrderContext);

  const [form, setForm] = useState({
    userName: buyer?.userName || "",
    email: buyer?.email || "",
    phoneNumber: buyer?.phoneNumber || "",
  });

  const { userName, email, phoneNumber } = form;

  const navigate = useNavigate();

  /* Set form with userDetails accordingly*/
  const handleOnChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  /* When user submit form */
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderBuyer(form);
    navigate("/checkout");
  };
  return (
    <div>
      <section id="payment" className="">
        <div className="container mx-auto mt-16 flex items-center justify-center">
          <div className="w-96 mx-2 rounded-lg  bg-slate-900">
            <form
              className="flex flex-col items-center px-8 py-4"
              onSubmit={handleSubmit}
            >
              <h1 className="text-3xl font-bold  mb-3 w-full text-center py-6 text-amber-50">
                Payment Details
              </h1>

              <div className="flex flex-col gap-2 min-w-full mb-6">
                <label htmlFor="userName" className="text-amber-50">
                  Name
                </label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="text"
                  name="userName"
                  id="userName"
                  value={userName}
                  placeholder="Name..."
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2 min-w-full mb-6">
                <label htmlFor="email" className="text-amber-50">
                  Enter Email
                </label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email..."
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 min-w-full mb-6">
                <label htmlFor="email" className="text-amber-50">
                  Phone Number
                </label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  placeholder="Phone Number.."
                  onChange={handleOnChange}
                  required
                />
              </div>

              <input
                className="min-w-full mt-4 rounded-md bg-amber-50 font-semibold text-slate-900 uppercase py-4 hover:cursor-pointer hover:bg-amber-200 active:scale-95"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetailsForm;
