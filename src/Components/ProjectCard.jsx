import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectCard({title, description, currStatus, image})
{

    return(
        <div className="Project">
            <div className="PrincipalImage">
                <Image alt="" src={image} fill className="Image"/>
            </div>
            <div className="container">
                <h6>{title}</h6>
       
                {currStatus === undefined ? 
                    <p>{description.substr(0, 200)}...</p>
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