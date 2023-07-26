import Image from "next/image";

export default function Footer()
{
    return(
        <div className="Footer container">
            <div className="Instagram socialNet">
                <Image src="Instagram.svg" fill className="Image"/>
            </div>
            <div className="Facebook socialNet">
                <Image src="Facebook.svg" fill className="Image"/>
            </div>
            <div className="WhatsApp socialNet">
                <Image src="WhatsApp.svg" fill className="Image"/>
            </div>
        </div>
    );
}