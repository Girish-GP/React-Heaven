const ContactUsComponent = () => {
  return (
    <div className="flex flex-col items-center w-full mt-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="border-2 shadow-sm rounded-xl flex flex-col gap-2 items-center p-4 w-1/3 text-sm">
        <div>
        <label for="first-name">First Name :</label>
        <input id="first-name" placeholder="Enter first name" type="text" className="ml-2 outline-0 border-2 rounded-sm"></input>
        </div>
        <div>
        <label for="last-name">Last Name :</label>
        <input id="last-name" placeholder="Enter last name" type="text" className="ml-2 outline-0 border-2 rounded-sm"></input>
        </div>
        <button type="submit" className="cursor-pointer block border-none p-2 rounded-xl shadow-md bg-sky-200">Submit</button>
      </form>  
    </div>
  ) 
};
export default ContactUsComponent;
