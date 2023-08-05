import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectCard({title, description, currStatus, image})
{
    const previewLength = 15
    const [preview, setPreview] = useState("")
    useEffect(()=>{
        var counter = 0;
        description.split(" ").map(word=>{
            if(counter < previewLength)
            {
                setPreview(preview+" "+word)
                counter++
            }
        })
    },[description])

    return(
        <div className="Project">
            <div className="PrincipalImage">
                <Image alt="" src={image} fill className="Image"/>
            </div>
            <div className="container">
                <h6>{title}</h6>
       
                {currStatus === undefined & preview ? 
                    <p>{preview}...</p>
                    :    
                    description.split("\n").map(text=>(
                        <p>{text}<br/><br/></p>
                    ))
                }
                {currStatus !== undefined && 
                    <p style={{textTransform: "uppercase"}}>-{currStatus}-</p>
                }
            </div>
        </div>
    );
}