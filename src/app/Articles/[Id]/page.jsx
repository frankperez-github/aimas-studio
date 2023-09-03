'use client'
import { useContext, useState } from "react";
import {useParams} from 'next/navigation'
import SiteContext from "../../Context/SiteContext";
import Header from "@/Components/Header";
import Image from "next/image";
import CategoryCard from "@/Components/CategoryCard";


export default function Article()
{
    var imageIndex = 0
    var thereIsImage = false
    // const [imageIndex, setImageIndex] = useState(0)
    const {articles} = useContext(SiteContext)
    const { Id } = useParams()
    const article = articles.find((art)=>(art.id === +Id))
    return(
        <div className="Article main">
            <Header />
            <Image src={article.image} fill className="Image"/>
            <h2 className="container title">{article.title}</h2>
            {article.description.split('\n').map((text)=>
            {
                text.split(" ").map((word)=>{
                    if(word === "(Foto)" ){
                        thereIsImage = true
                        imageIndex +=1
                        text = text.replace(word, "")
                        console.log(imageIndex)
                    }
                })
                if(thereIsImage)
                {
                    thereIsImage = false
                    return(
                        <>
                            <Image src={`/${article.secondaryImages[imageIndex-1]}`}fill className="Image"/>
                            <p className="container">{text}<br/><br/></p>
                        </>
                        )
                }
                else
                {
                    return <p className="container">{text}<br/><br/></p>
                }
            })}
            <div className="AboutUs container artUs">
                <h2>Sobre Nosotros</h2>
                <p>Somos un equipo creativo (TCP) que pone en tus manos la posibilidad de hacer brillar tu marca</p>
                <a href="/#Nosotros">
                    <button className="siteButton">conócenos +</button>
                </a>
            </div>
            <div className="categories">
                <CategoryCard path="GraphicalDesign" bold={"Diseño"}  regular={"Gráfico"} image={"/redCheck.svg"}/>
                <CategoryCard path="WebSites" bold={"Sitios"} regular={"Web"} image={"/blueCheck.svg"}/>
            </div>
        </div>
    );
}