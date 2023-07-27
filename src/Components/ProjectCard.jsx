import Image from "next/image";

export default function ProjectCard({title, description, currStatus, image})
{
    return(
        <div className="Project">
            <div className="PrincipalImage">
                <Image alt="" src={image} fill className="Image"/>
            </div>
            <div className="container">
                <h6>{title}</h6>
                {description.split("\n").map(text=>(
                    <p>{text}<br/><br/></p>
                ))}
                <p style={{textTransform: "uppercase"}}>-{currStatus}-</p>
            </div>
        </div>
    );
}