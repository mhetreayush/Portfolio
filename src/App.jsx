import { useState } from "react";
import Mainwrapper from "./Components/Mainwrapper";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import about from "./Assets/about.json";
import resume from "./Assets/resume.json";
import projects from "./Assets/projects.json";
import contact from "./Assets/contact.json";
import background from "./bg.png";
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
      heading: "Resume",
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
    <div
      className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        onMouseEnter={() => window.removeEventListener("scroll")}
        className="sticky top-0 flex justify-center w-full  bg-white py-4 z-50"
      >
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
            className="snap-center min-h-screen"
            onMouseEnter={() => setViewNow(item.name)}
            onTouchMoveCapture={() => setViewNow(item.name)}
          >
            <Mainwrapper
              children={item.component}
              heading={item.heading}
              animationData={item.animationData}
              odd={index % 2 === 0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
