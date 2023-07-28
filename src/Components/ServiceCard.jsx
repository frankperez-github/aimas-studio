import Image from "next/image";

export default function ServiceCard({other, image, color, bold, regular, text})
{
    return(
        <div className="ServiceCard">
            <div className="cardTitle">
                <h3>{bold} <span className="span">{regular}</span></h3>
                <div className="">
                    <Image alt="" src={image} className="Image" fill/>
                </div>
            </div>
            {text.split("\n").map((text)=>(
                <p>{text}<br/><br/></p>
            ))}
            
            {other ?
                <a href={`https://wa.me/message/MN6BFSOS42RHJ1?text=${"Hola, me gustaría conocer más sobre otros servicios"}`}>
                    <button className="siteButton" style={{backgroundColor: color, color: "white", borderColor: color}}>contactar al comercial</button>
                </a>
                :
                <div className="">
                    <a href={`https://wa.me/message/MN6BFSOS42RHJ1?text=${"Hola, me gustaría conocer más sobre el servicio "+bold+" "+regular}`}>
                        <button className="siteButton" style={{backgroundColor: color, color: "white", borderColor: color}}>solicitar más información</button>
                    </a>

                    <a href={`https://wa.me/message/MN6BFSOS42RHJ1?text=${"Hola, me gustaría contratar el servicio "+bold+" "+regular}`}>
                        <button className="siteButton" style={{backgroundColor: "white", color: color, borderColor: color}}>contratar servicio</button>
                    </a>
                </div>
}
        </div>
    );
}