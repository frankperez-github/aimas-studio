'use client'
import { useContext } from "react";
import {useParams} from 'next/navigation'
import SiteContext from "../../Context/SiteContext";
import Header from "@/Components/Header";
import Image from "next/image";


export default function Article()
{
    const {articles} = useContext(SiteContext)
    const { Id } = useParams()
    const article = articles.find((art)=>(art.id === +Id))
    return(
        <div className="Article main">
            <Header />
            <Image src={article.image} fill className="Image"/>
            <h2 className="container title">{article.title}</h2>
            <p className="container">{article.description}</p>
        </div>
    );
}