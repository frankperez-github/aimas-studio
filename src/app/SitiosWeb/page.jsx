import Header from "@/Components/Header";
import ServiceCard from "@/Components/ServiceCard";

export default function WebSites()
{
    return(
        <div className="main">
            <Header />
            <div className="WebSites container">
                <h2>Sitios <span className="span">Web</span></h2>
                <p>Un sitio web es el equivalente a un local físico en la esfera digital; su diseño, función y la visibilidad que tenga son factores decisivos para nuestro negocio</p>
            </div>
            <ServiceCard bold={"Sitio"} regular={"Promocional"} image={"/blueCheck.svg"} color={"blue"} text={"Sitio Web sencillo que contiene una descripción de su empresa, imágenes de los productos y/o servicios que ofrece y botones de contacto."}/>
        </div>
    );
}