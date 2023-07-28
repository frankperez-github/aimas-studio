import Image from "next/image";

export default function Footer()
{
    return(
        <div className="Footer container">
            <div className="Instagram socialNet">
                <a href="https://instagram.com/aimas_studio?igshid=NTc4MTIwNjQ2YQ==">
                    <Image alt="" src="Instagram.svg" fill className="Image"/>
                </a>
            </div>
            <div className="Facebook socialNet">
                <a href="https://www.facebook.com/profile.php?id=100093382833855">
                    <Image alt="" src="Facebook.svg" fill className="Image"/>
                </a>
            </div>
            <div className="WhatsApp socialNet">
                <a href="https://wa.me/message/MN6BFSOS42RHJ1">
                    <Image alt="" src="WhatsApp.svg" fill className="Image"/>
                </a>
            </div>
        </div>
    );
}