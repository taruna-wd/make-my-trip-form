import { useState } from "react";

export default function Form() {
  let [addNumber, setAddNumber] = useState("");
  let [error, setError] = useState("");
  let [disabled, setDisabled] = useState(true)

  let newNumber = (event) => {
    let input = event.target.value;
    let num = /^\d{0,10}$/
    if (num.test(input)) {
      setAddNumber(input);
      setDisabled(false)

      if (inputValue.length === 10) {
        setError("");
      }
    } else {
      setError("enter valid number");
      setDisabled(true)
    }
  };
  

  return (
    <>
      <div className=" container flex flex-col justify-center  p-10 rounded-lg w-2/5 shadow-lg mx-auto">
        <div className="flex justify-center items-center rounded-full shadow-2xl p-2   ">
          <button className="bg-cyan-500   text-white font-semibold p-2 rounded-full mx-1 w-2/4">
            Personal Account
          </button>
          <button className="p-2 px-2 rounded-full w-2/4 font-bold ">
            MyBiz Account
          </button>
        </div>
        <form action="" className="flex flex-col	 my-3">
          <label htmlFor="mobile" className="text-left 	">
            Mobile Number
          </label>

          <div className="input flex justify-center items-center my-3">
            <img src="./assets/in.png" alt="" /> 91+
            <i className="fa-solid fa-angle-down text-blue-700"></i>
            <input
              type="text"
              value={addNumber}
              onChange={newNumber}
              name="mobile"
              id="mobile"
              placeholder="enter mobile number"
              maxLength="10"
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button className="rounded-full submit text-white " disabled={disabled}  style={{backgroundColor:disabled ? "grey" : "blue"}}>
          
            CONTINUE
          </button>

          <div className="line">
            <span>Or Login/Signup With</span>
          </div>

          <div className="flex place-content-center">
            <i className="fa-brands fa-google  circle  hover:bg-slate-200"></i>
            <i class="fa-regular fa-envelope  circle hover:bg-slate-200"></i>
          </div>
        </form>
        <div className="bottom ">
          By proceeding, you agree to MakeMyTrip's{" "}
          <a href="" className="text-blue-500">
            Privacy Policy, User Agreement
          </a>{" "}
          and{" "}
          <a href="" className="text-blue-500">
            T&Cs
          </a>
        </div>
      </div>
    </>
  );
}
