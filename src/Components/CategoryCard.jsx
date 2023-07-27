import Image from "next/image";
import Link from "next/link";
export default function CategoryCard({path, bold, regular, image})
{
    return(
        <div className="CategoryCard">
            <div className="categoryCheck">
                <Image className="Image" src={image} fill/>
            </div>
            <div className="title">
                <h3>{bold}</h3>
                <p>{regular}</p>
            </div>
            <Link href={path}>
                <button>ver más</button>
            </Link>
        </div>
    );
}