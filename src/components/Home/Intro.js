import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Web Developer.")
          .pause(750)
          .delete(14)
          .pause(500)
          .type("software Developer.")
          .pause(750)
          .delete(21)
          .type("eager to learn.");
        return instance;
      }}
    />
  );
}

export default Intro;
