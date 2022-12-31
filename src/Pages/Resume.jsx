import resume from "../Assets/resume.pdf";
const Resume = () => {
  return (
    <div className="h-full w-full">
      <object
        data={resume}
        type="application/pdf"
        className="rounded-md h-full w-full"
      >
        <p>
          <a target="_blank" download={true} href={resume} rel="noreferrer">
            Resume
          </a>
        </p>
      </object>
    </div>
  );
};

export default Resume;
