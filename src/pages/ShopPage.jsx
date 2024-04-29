import LogitechAudi from "../assets/image/auri-logitech.png";
import KeyboardLogitech from "../assets/image/keyboard.png";
import AuriLogitech from "../assets/image/auri-logitech.png";
import MouseCard from "../assets/image/mouse.png";
import HeroImg from "../assets/image/hero-1.png";
import React from "react";
import Navbar from "../components/Navbar";
import CreateCard from "../components/CreateCard";

function HomePage() {
  return (
    <div>
      <main>
        <Navbar />
        <section>
          <article>
            <div className="w-[800px] m-0 m-auto mt-[30px]">
              <h1 className="text-5xl font-semibold">
                Acá estan nuestros Productos.
              </h1>
              <div className="grid lg:grid-cols-3 grid-cols-2 mt-[60px] text-center">
                <CreateCard
                  image={LogitechAudi}
                  title="Audifonos LogiTech Pro"
                />
                <CreateCard
                  image={LogitechAudi}
                  title="Audifonos LogiTech Pro"
                />
                <CreateCard
                  image={LogitechAudi}
                  title="Audifonos LogiTech Pro"
                />
                <CreateCard
                  image={LogitechAudi}
                  title="Audifonos LogiTech Pro"
                />
                <CreateCard
                  image={LogitechAudi}
                  title="Audifonos LogiTech Pro"
                />
                <CreateCard
                  image={LogitechAudi}
                  title="Audifonos LogiTech Pro"
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
