import Image from "next/image";
import Link from "next/link";
export default function CategoryCard({bold, regular, image})
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
            <Link href={"/"+bold+regular}>
                <button>ver más</button>
            </Link>
        </div>
    );
}