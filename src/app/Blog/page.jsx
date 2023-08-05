'use client'
import Header from "@/Components/Header";
import ProjectCard from "@/Components/ProjectCard";
import { useContext } from "react";
import SiteContext from "../Context/SiteContext";
import Link from "next/link";

export default function Blog()
{
    const {articles} = useContext(SiteContext)
    return(
        <div className="Blog main">
            <Header />
            <h1 className="container">Blog</h1>
            {articles.map(article=>(
                <Link href={`/Articles/${article.id}`}>
                    <ProjectCard title={article.title} description={article.description} image={article.image} currStatus={undefined}/>
                </Link>
            ))}
        </div>
    );
}