const About = () => {
  const Code = ({ children }) => {
    return (
      <code className="underline font-semibold underline-offset-2">
        {children}
      </code>
    );
  };
  return (
    <div>
      Hello and welcome to my portfolio website! My name is{" "}
      <Code>Ayush Mhetre</Code> and I am currently a frontend web developer
      studying at <Code>Vellore Institute of Technology, Vellore</Code> with a
      passion for creating visually appealing and user-friendly websites. I have
      gained valuable experience through my past <Code>internship</Code>, where
      I had the opportunity to work on various projects and learn from
      experienced professionals in the field. This experience has allowed me to
      develop my skills in <Code>HTML, CSS, and JavaScript</Code>, as well as
      familiarize myself with popular frameworks such as{" "}
      <Code>TailwindCSS</Code> and <Code>React</Code>. In my free time, I enjoy
      staying up-to-date with the latest web development trends and techniques
      by participating in <Code>online coding challenges</Code> and{" "}
      <Code>working on personal projects</Code>. I am always eager to learn and
      improve my skills, and I am excited to see where my career as a{" "}
      <Code>web developer</Code> takes me in the future
    </div>
  );
};

export default About;
