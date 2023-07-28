import Image from "next/image";
import Link from "next/link";

export default function SideMenu({setMenu, menu})
{
    return(
        <div className="Menu" id="menu" style={{display: menu}}>
            <div className="close" onClick={()=>(setMenu("none"))}>
                <Image alt="" src="back.svg" fill className="Image"/>
            </div>
            
            <Link href="/">
                <h4>Inicio</h4>
            </Link>

            <Link href="/GraphicalDesign">
                <h4>Diseño Gráfico</h4>
            </Link>
            
            <Link href="/WebSites">
                <h4>Sitios Web</h4>
            </Link>

            <Link href="/Projects">
                <h4>Galería</h4>
            </Link>

            <div className="networks">
            <div className="Instagram socialNet">
                    <a href="https://instagram.com/aimas_studio?igshid=NTc4MTIwNjQ2YQ==">
                        <Image alt="" src="InstagramLight.svg" fill className="Image"/>
                    </a>
                </div>
                <div className="Facebook socialNet">
                    <a href="https://www.facebook.com/profile.php?id=100093382833855">
                        <Image alt="" src="FacebookLight.svg" fill className="Image"/>
                    </a>
                </div>
                <div className="WhatsApp socialNet">
                    <a href="https://wa.me/+1 (305) 709-0744">
                        <Image alt="" src="WhatsAppLight.svg" fill className="Image"/>
                    </a>
                </div>
            </div>
        </div>
    )
}