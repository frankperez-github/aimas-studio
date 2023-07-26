'use client'
import Image from "next/image";
import { useState } from "react";
import SideMenu from '@/Components/SideMenu'
import Link from "next/link";

function Header() { 
    const [menu,setMenu] = useState("none")

    return(
        <div className="">
            <SideMenu setMenu={setMenu} menu={menu}/>
            <div className="Header">
                <div className="Logo">
                    <Link href="/">
                        <Image className="Image" src="/Logo.svg" fill/>
                    </Link>
                </div>

                <div className="burgerMenu" onClick={()=>setMenu("block")}>
                    <Image className="Image" src="/Burger.svg" fill/>
                </div>
            </div>
        </div>
    );
}
export default Header