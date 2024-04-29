import KeyboardLogitech from "../assets/image/keyboard.png";
import AuriLogitech from "../assets/image/auri-logitech.png";
import MouseCard from "../assets/image/mouse.png";
import HeroImg from "../assets/image/hero-1.png";
import React from "react";
import Navbar from "../components/Navbar";
import CreateCardShow from "../components/CreateCardShow";

function HomePage() {
  return (
    <div>
      <main>
        <Navbar />
        <section>
          <article>
            <div className="w-[80%] h-[80vh] m-0 m-auto mt-[6%] rounded-lg p-[6px] flex flex-col md:flex-row justify-center items-center bg-slate-100/55 backdrop-blur-sm text-center">
              <div className="w-[400px] ml-[60px]">
                <h1 className="text-4xl font-semibold">
                  Necesitas Cosas Tecnicas?, Acá lo tenemos todo.
                </h1>
                <p className="opacity-50 p-[6px]">
                  Nuestros mejores Perefericos/Productos
                </p>
                <a
                  href="#"
                  className="bg-black p-[6px] text-white rounded-full p-[6px] m-[6px]"
                >
                  Buy Now
                </a>
              </div>
              <div>
                <img className="w-[1200px]" src={HeroImg} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center md:h-[80vh] h-[100vh] flex-col">
              <h1 className="text-3xl font-semibold">Lo Más Comprado:</h1>
              <div className="grid md:grid-cols-3 grid-cols-1 mt-[30px] text-center">
                <CreateCardShow
                  image={MouseCard}
                  title="Mouse LogiTech G203"
                  price="$50.00"
                />
                <CreateCardShow
                  image={AuriLogitech}
                  title="Mouse LogiTech G203"
                  price="$70.00"
                />
                <CreateCardShow
                  image={KeyboardLogitech}
                  title="Mouse LogiTech G203"
                  price="$90.00"
                />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
