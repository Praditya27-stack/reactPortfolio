import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.reveal');
  }, []);

  return (
    <section id="home" className="h-screen flex items-center" style={{ backgroundColor: 'rgb(0, 140, 255)'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center h-full text-left">
          <h1 className="text-white text-8xl font-bold mb-4 drop-shadow-[5px_5px_10px_rgba(0,0,0,0.5)] reveal">
            <span>HELLO<br />THERE</span>
          </h1>
          <br/>
          <p className="text-white text-4xl reveal">
            I'm Praditya Abyan. A Programmer specialized in frontend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
