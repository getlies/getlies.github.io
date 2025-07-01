import React, { useEffect } from "react";
import CodeProject from "../components/CodeProject";
import UIProject from "../components/UIProject";
import useTitle from "../components/useTitle";
import spammer from "../assets/thumbnails/spammer.jpeg";
import voice from "../assets/thumbnails/voice.jpeg";
import creatorhub from "../assets/thumbnails/creatorhub.png";
import creatorhubbw from "../assets/thumbnails/creatorhubbw.png";
import vroomin from "../assets/thumbnails/vroomin.png";
import vroominbw from "../assets/thumbnails/vroominbw.png";
import olyverse from "../assets/thumbnails/olyverse.png";
import olyversebw from "../assets/thumbnails/olyversebw.png";
import draw from "../assets/cat/draw.webp";
import tv from "../assets/cat/tv.webp";

const codeProjects = [
  {
    name: "spammer discord",
    description: "auto spammer discord for leveling role",
    image: spammer,
    bwimage: spammer,
    link: "https://github.com/getlies/spammer-multiple-discord",
    skills: ["nodejs", "js"],
    rotate: "0",
    shift: "0",
  },
    {
    name: "voice discord",
    description: "voice multiple",
    image: voice,
    bwimage: voice,
    link: "https://github.com/getlies/Voice-Discord-Multiple",
    skills: ["nodejs", "js"],
    rotate: "0",
    shift: "0",
  },
];

const uiProjects = [
  {
    name: "vroomin",
    description:
      "a user experience designed to help facilitate campus ridesharing",
    image: vroomin,
    bwimage: vroominbw,
    link: "/vroomin",
    rotate: "1",
    shift: "15",
  },
  {
    name: "CreatorHub",
    description:
      "a platform to connect brands with content creators for advertisement",
    image: creatorhub,
    bwimage: creatorhubbw,
    link: "/creatorhub",
    rotate: "-1",
    shift: "0",
  },
  {
    name: "Olyverse",
    description:
      "a digital experience to engage with fans on all things ancillary to the LA28 games",
    image: olyverse,
    bwimage: olyversebw,
    link: "/olyverse",
    rotate: "0",
    shift: "15",
  },
];

function Projects() {
  useTitle("projects - ");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="px-24 pt-36 pb-6 max-md:px-8 max-md:pt-36 max-md:pb-20">
        <div className="flex items-end gap-5">
          <h1>projects</h1>
          <img src={draw} className="h-28 max-md:hidden" alt="" />
        </div>
        <div className="project-flex">
          {codeProjects.map((projects) => (
            <CodeProject
              key={projects.name}
              name={projects.name}
              date={projects.date}
              description={projects.description}
              image={projects.image}
              bwimage={projects.bwimage}
              link={projects.link}
              skills={projects.skills}
              rotate={projects.rotate}
              shift={projects.shift}
            />
          ))}
        </div>
      </div>
      <section className="px-24 max-md:px-12">
        <div className="flex items-end justify-between">
          <img src={tv} className="h-48 max-md:hidden" alt="" />
          <h1 style={{ maxInlineSize: "500px", wordWrap: "break-word" }}>
            proto&shy;types
          </h1>
        </div>
        <div className="project-flex">
          {uiProjects.map((projects) => (
            <UIProject
              key={projects.name}
              name={projects.name}
              date={projects.date}
              description={projects.description}
              image={projects.image}
              bwimage={projects.bwimage}
              link={projects.link}
              rotate={projects.rotate}
              shift={projects.shift}
            />
          ))}
        </div>
      </section>
      <h3 className="my-24 flex w-screen justify-center">
        ... and more to come! ^^
      </h3>
    </>
  );
}

export default Projects;
