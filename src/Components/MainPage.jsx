import Image from "next/image";
import CategoryCard from "./CategoryCard";

export default function MainPage()
{
    return(
        <div className="MainPage">
            <div className="AboutUs container">
                <h2>Sobre Nosotros</h2>
                <p>Somos un equipo creativo (TCP) que pone en tus manos la posibilidad de hacer brillar tu marca</p>
                <button className="siteButton">conócenos +</button>
            </div>
            <div className="categories">
                <CategoryCard bold={"Diseño"}  regular={"Gráfico"} image={"/redCheck.svg"}/>
                <CategoryCard bold={"Sitios"} regular={"Web"} image={"/blueCheck.svg"}/>
            </div>
            <div className="goToGallery">
                <Image src="" fill/>
                <div className="line">
                    <div className="redTriang" style={{width: "7%", paddingRight: "3%"}}>
                        <Image src="/redPointer.svg" fill className="Image"/>
                    </div>
                    <h5> Galería <span>de proyectos</span></h5>
                </div>
            </div>
            <div className="Comunidad container">
                <h2>Comunidad</h2>
                <p>Contamos con una aplia comunidad digital en dónde te brindamos consejos y recomendacuones para impulsar tu negocio en distintas esferas</p>
                <button className="siteButton">unirme a la comunidad</button>
            </div>
            <div className="Us container" id="Nosotros">
                <h2>¿Quiénes somos?</h2>
            </div>
        </div>
    );
}