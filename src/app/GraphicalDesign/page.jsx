'use client'
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useContext } from "react";
import ServicesContext from "../Context/ServicesContext";
import ServiceCard from "@/Components/ServiceCard";

export default function Design()
{
    const{services} = useContext(ServicesContext)
    return(
        <div className="">
            <Header />
            <div className="Design container note">
                <h2>Diseño <span className="span">Gráfico</span></h2>
                <p>El diseño gráfico es imprescindible para la creación y/o consolidación de su empresa. A continuación les mostramos los servicios que nestro estudio ofrece para usted en este sector: </p>
            </div>

            {services.map((card)=>
            (
                card.category === "design" &&
                    <ServiceCard bold={card.bold} regular={card.regular} image={card.image} color={card.color} text={card.text}/>
                
            ))}
            <ServiceCard other={true} bold={"Otros"} regular={"Servicios"} color={"pink"} image={"/pinkCheck.svg"} text={"Si usted desea un servicio independiente como:\n-Creación de tarjetas de presentación.\n-Catálogos digitales o cartas menú.\n-Diseño o rediseño de logotipo.\n-Cartel publicitario para redes sociales.\n-Identificador y papelería para evento.\n De igual manera puede contactarnos, será un placer atenderle."}/>

            <div className="note container">
                <h3>Nota</h3>
                <p>En Aimas Studio nos encargamos de crear los diseños que usted necesite y además gestionamos, totalmente gratis, la producción de los mismos sobre los distintos formatos con los mejores talleres de La Habana.</p>
            </div>
            <Footer />
        </div>
    );
}