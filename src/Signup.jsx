import { useState } from "react"

export default function Signup(){
    let [addNumber , setAddNumber  ]  = useState("")
    let [error , setError  ]  = useState("")
    let [ disabled , setDisabled] = useState(true)


    let newNumber =(event)=>{
      let input = event.target.value

      setAddNumber(input)

      let mail =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // for mail input 
      if(mail.test(input)){
          setError("")
          setDisabled(false)

      }else{
        setError(" enter valid mail id")
        setDisabled(true)

      }
      
    }


    return (

        <>
         <div className=" container flex flex-col justify-center  p-10 rounded-lg w-2/5 shadow-lg mx-auto">
  <div className="flex justify-center items-center rounded-full shadow-2xl p-2  my-3  ">
    <button className="font-bold p-2 rounded-full mx-1 w-2/4">Personal Account</button>
   <button className="  p-2 px-2 rounded-full w-2/4 font-semibold bg-orange-400  ">MyBiz Account</button> 
  </div>
  <h3 className="text-2xl font-bold">Login/Sign up

</h3>
  <form action="" className="flex flex-col	 my-3">
  <label htmlFor="mobile" className="text-left 	">Work Email</label> 

    <div className="input flex justify-center items-center my-3">
<input type="text"  value={addNumber}  onChange={newNumber}  id="mobile" placeholder="Enter your work email id"   /> 

    </div>
    {error && <p style={{color:"red"}}> {error}</p>}
    <button className="rounded-full submit text-white" disabled={disabled} style={{background:disabled ? "grey" :"blue"}}> CONTINUE</button>


    <div className="line">
        <span>Or Login/Signup With</span>
    </div>

    <div className="flex place-content-center" >
    <i className="fa-brands fa-google  circle  hover:bg-slate-200" ></i>
    </div>


 
  </form>
  <div className="bottom ">
  By proceeding, you agree to MakeMyTrip's  <a href="" className="text-blue-500">Privacy Policy, User Agreement</a>  and  <a href="" className="text-blue-500">T&Cs</a> 


  </div>
         </div>
        </>
    )
}