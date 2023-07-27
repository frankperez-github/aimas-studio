'use client'
import Header from "@/Components/Header";
import ServiceCard from "@/Components/ServiceCard";
import { useContext } from "react";
import ServicesContext from "../Context/ServicesContext";
import Footer from "@/Components/Footer";

export default function WebSites()
{
    const{ services } = useContext(ServicesContext)
    return(
        <div className="main">
            <Header />
            <div className="WebSites container">
                <h2>Sitios <span className="span">Web</span></h2>
                <p>Un sitio web es el equivalente a un local físico en la esfera digital; su diseño, función y la visibilidad que tenga son factores decisivos para nuestro negocio</p>
            </div>
            {services.map((card)=>
            (
                card.category === "development" &&
                    <ServiceCard bold={card.bold} regular={card.regular} image={card.image} color={card.color} text={card.text}/>
            ))}
            <div className="note container">
                <h3>Nota</h3>
                <p>Este servicio, en dependencia de las necesidades del cliente, incluye hosting y dominio (.com, .NET, .vercel.app) y consta de varias etapas como el diseño, el desarrollo y la gestión del sitio</p>
            </div>
            <Footer />
        </div>
    );
}