'use client'
import Header from "@/Components/Header";
import { useContext } from "react";
import SiteContext from "../Context/SiteContext";
import ProjectCard from "@/Components/ProjectCard";

export default function Projects()
{
    const {projects} = useContext(SiteContext) 
    return(
        <div className="main">
            <Header />
            <h2 className="container">Galería <span className="span"> de proyectos</span></h2>
            {projects.map(project=>(
                <ProjectCard image={project.image} title={project.title} description={project.description} currStatus={project.currStatus}/>
            ))}
        </div>
    );
}