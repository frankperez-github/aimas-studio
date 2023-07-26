import Image from "next/image";
import Link from "next/link";

export default function SideMenu()
{
    return(
        <div className="Menu">
            <div className="close">
                <Image src="back.svg" fill className="Image"/>
            </div>
            
            <Link href="/">
                <h4>Inicio</h4>
            </Link>

            <Link href="/DiseñoGráfico">
                <h4>Diseño Gráfico</h4>
            </Link>
            
            <Link href="/SitiosWeb">
                <h4>Sitios Web</h4>
            </Link>

            <Link href="/Galería">
                <h4>Galería</h4>
            </Link>

            <div className="networks">
                <div className="Instagram socialNet">
                    <Image src="InstagramLight.svg" fill className="Image"/>
                </div>
                <div className="Facebook socialNet">
                    <Image src="FacebookLight.svg" fill className="Image"/>
                </div>
                <div className="WhatsApp socialNet">
                    <Image src="WhatsAppLight.svg" fill className="Image"/>
                </div>
            </div>
        </div>
    )
}