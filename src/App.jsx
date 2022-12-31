import { useState } from "react";
import Mainwrapper from "./Components/Mainwrapper";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import about from "./LottieFiles/about.json";
import resume from "./LottieFiles/resume.json";
import projects from "./LottieFiles/projects.json";
import contact from "./LottieFiles/contact.json";
const App = () => {
  const [viewNow, setViewNow] = useState("about");
  const pages = [
    {
      name: "about",
      heading: "About",
      component: <About />,
      animationData: about,
    },
    {
      name: "resume",
      heading: "Hire Me",
      component: <Resume />,
      animationData: resume,
    },
    {
      name: "projects",
      heading: "Projects",
      component: <Projects />,
      animationData: projects,
    },
    {
      name: "contact",
      heading: "Contact Me",
      component: <Contact />,
      animationData: contact,
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <div className="sticky top-0 flex justify-center w-full  backdrop-blur-md py-4 z-50">
        <div className=" w-3/4 flex justify-between items-center">
          <div className="text-xl leading-tight font-semibold">
            Ayush
            <br />
            Mhetre
          </div>
          <div className="flex gap-x-4">
            {pages.map((item, index) => {
              return (
                <a
                  key={index}
                  href={`#${item.name}`}
                  className={` ${viewNow === item.name && "font-bold"}`}
                  onClick={() => setViewNow(item.name)}
                >
                  <p className="first-letter:uppercase">{item.name}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {pages.map((item, index) => {
        return (
          <div
            key={index}
            id={item.name}
            className="snap-center min-h-screen pt-10"
            onMouseEnter={() => setViewNow(item.name)}
          >
            <Mainwrapper
              children={item.component}
              heading={item.heading}
              animationData={item.animationData}
              reverse={index % 2 === 0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
