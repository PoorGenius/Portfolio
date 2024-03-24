import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { github } from "../assets";

import { projects } from "../constants";

const ProjectsCard = ({ project, idx }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#081B29", color: "#fff", border: "1px solid #61DAFB", boxShadow: "none", }}
            iconStyle={{ background: "#fff" }}
            date={
                <div className={`hidden lg:flex text-[24px] font-bold w-full ${idx % 2 == 0 ? "justify-start" : "justify-end"}`}>
                    {project.title}
                </div>
            }
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img src={project.icon} className="w-[60%] h-[60%] object-contain" />
                </div>
            }
            contentArrowStyle={{ borderRight: "7px solid #61DAFB" }}
        >
            <div className="w-full flex justify-end">
                <a href="/#">
                    <img src={github} />
                </a>

            </div>
            <h3 className="lg:hidden block text-[20px] font-bold">{project.title}</h3>
            <div className="w-full flex flex-col items-center mb-8">
                <p className="min-w[200px] w-auto max-w-[300px] text-left">
                    <span className="text-[18px]">{project.description}</span>
                    <ul className="flex gap-4 mt-4 flex-wrap">
                        {project.tech[0].map((tech, index) => (
                            <li key={index} style={{ color: project.tech[1][index] }} className="text-[14px]">
                                #{tech}
                            </li>
                        ))}
                    </ul>
                </p>
            </div>

        </VerticalTimelineElement>
    )
}

const Projects = () => {
    return (
        <section className="text-white w-full flex flex-col text-center font-roboto mt-4 max-w-[1440px]">
            <h1 className="text-[64px] font-bold">Selected Works</h1>
            <div>
                <VerticalTimeline>
                    {projects.map((project, index) => (
                        <ProjectsCard key={index} project={project} idx={index} />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Projects