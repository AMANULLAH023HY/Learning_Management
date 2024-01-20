import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
function Signup() {
  const [previewImage, setPreviewImage] = useState("");
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Registration Page</h1>

          <label htmlFor="imgae_uploads" className="cursor-pointer">
            {previewImage ? (
              <img
                className="h-24 w-24 rounded-full m-auto"
                src={previewImage}
                alt=""
              />
            ) : (
              <BsPersonCircle className="h-24 w-24 rounded-full m-auto" />
            )}
          </label>

          <input className="hidden "
            type="file"
            name="image_uploads"
            id="image_uploads"
            accept=".jpg, .jpeg, .png, .svg"
          />

          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input 
            type='email'
            required
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="bg-transparent px-2 py-1 border"
             />
             </div>
          <div className="flex flex-col gap-1 ">

            <label htmlFor="password" className="font-semibold">Password</label>
            <input 
            type='password'
            required
            name="password"
            id="password"
            placeholder="Enter your password..."
            className="bg-transparent px-2 py-1 border"
             />
          </div>

          <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out 
           duration-300 rounded-sm py-2 font-semibold text-lg cursor pointer ">Create account</button>

           <p className="text-center">Already have an account ? <Link to='/login' className="link text-accent cursor-pointer">Login</Link> </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signup;