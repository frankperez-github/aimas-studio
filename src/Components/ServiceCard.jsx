import Image from "next/image";

export default function ServiceCard({other, image, color, bold, regular, text})
{
    return(
        <div className="ServiceCard">
            <div className="cardTitle">
                <h3>{bold} <span className="span">{regular}</span></h3>
                <div className="">
                    <Image src={image} className="Image" fill/>
                </div>
            </div>
            {text.split("\n").map((text)=>(
                <p>{text}<br/><br/></p>
            ))}
            
            {other ?
                <button className="siteButton" style={{backgroundColor: color, color: "white", borderColor: color}}>contactar al comercial</button>
                :
                <div className="">
                    <button className="siteButton" style={{backgroundColor: color, color: "white", borderColor: color}}>solicitar más información</button>
                    <button className="siteButton" style={{backgroundColor: "white", color: color, borderColor: color}}>contratar servicio</button>
                </div>
}
        </div>
    );
}