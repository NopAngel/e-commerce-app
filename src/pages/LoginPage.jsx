import HeroImg from "../assets/static-image.jpg";
import React from "react";

function SubmitButton() {
  localStorage.setItem("login", "true");
  location.href = "/";
}

function LoginPage() {
  const localForm = localStorage.getItem("login");
  if (localForm == "true") {
    window.location.href = `/`;
  } else {
    return (
      <div className="flex justify-evenly items-center h-[100vh] md:flex-row flex-col">
        <form>
          <div className="">
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="opacity-55 p-[6px]">
              Logeate para seguír continuando...
            </p>
            <div>
              <div>
                <input
                  type="text"
                  className="p-[6px] bg-slate-100 w-[350px] mb-[20px] outline-none rounded-md"
                  placeholder="Ingrese Nombre"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="p-[6px] bg-slate-100 w-[350px] mb-[20px] outline-none rounded-md"
                  placeholder="Ingrese Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="p-[6px] bg-slate-100 w-[350px] mb-[20px] outline-none rounded-md"
                  placeholder="Ingrese Password"
                />
              </div>
              <div>
                <button
                  className="bg-black w-[400px] text-white p-[6px] rounded-lg cursor-pointer"
                  onClick={SubmitButton()}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </form>
        <div>
          <img className="w-[800px] rounded-lg" src={HeroImg} alt="" />
        </div>
      </div>
    );
    localStorage.removeItem("login");
  }
}

export default LoginPage;
