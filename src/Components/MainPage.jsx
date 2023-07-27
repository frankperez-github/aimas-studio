import Image from "next/image";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

export default function MainPage()
{
    return(
        <div className="MainPage">
            <div className="AboutUs container">
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
            <Link href="/Projects">
                <div className="goToGallery">
                    <div className="collage">
                        <Image src="/aimasCollage.svg" fill className="Image"/>
                    </div>
                    <div className="line">
                        <div className="redTriang" style={{width: "7%", paddingRight: "3%"}}>
                            <Image src="/redPointer.svg" fill className="Image"/>
                        </div>
                        <h5> Galería <span>de proyectos</span></h5>
                    </div>
                </div>
            </Link>
            <div className="Comunidad container">
                <h2>Comunidad</h2>
                <p>Contamos con una aplia comunidad digital en dónde te brindamos consejos y recomendacuones para impulsar tu negocio en distintas esferas</p>
                <button className="siteButton">unirme a la comunidad</button>
            </div>
            <div className="Us container" id="Nosotros">
                <h2>¿Quiénes somos?</h2>
                <p>Nos especializamos en diseño de marcas, soportes publicitarios, en la gestión de redes sociales y en la creación de sitios webs y apps.</p>
                <br />
                <p>Nuestra misión es contribuir con el desarrollo de las empresas que deseen insertarse en el mercado actual y seguir el ritmo que este impone.</p>
                <br />
                <p>Tenemos un marcado compromiso social que nos impulsa a realizar talleres, encuentros e intercambios que ponen al diseño en un papel protagónico para el mejoramiento de nuestra sociedad.</p>
                <br />
                <br />
            </div>
        </div>
    );
}