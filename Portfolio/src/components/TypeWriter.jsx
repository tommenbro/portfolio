import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div className="items-center text-center justify-center ">
      <span className="sm:text-9xl text-6xl text-dark dark:text-light font-serif text-center items-center justify-center">
        <Typewriter
          options={{
            strings: [
              "Hello!",
              "Hei!",
              "Hola!",
              "Hallo",
              "Salut!",
              "Bonjour!",
              "Ciao!",
              "Olá!",
              "Namaste!",
              "Salaam!",
              "Konnichiwa!",
              "Nǐ hǎo!",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1000,
          }}
        />
      </span>
      <h1 className="sm:text-5xl text-3xl text-black dark:text-white font-semibold pt-12 sm:pt-24">
        I'm Tomas
      </h1>
      <h1 className="text-black dark:text-white mt-12 sm:mb-0 sm:mt-6 font-thin sm:font-light text-lg">
        A Junior Frontend Developer &{" "}
        <span className="text-dark dark:text-light">More!</span>
      </h1>
    </div>
  );
};

export default TypeWriter;
