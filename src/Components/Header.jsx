import Image from "next/image";
function Header() {
    return(
        <div className="Header">
            <div className="Logo">
                <Image className="Image" src="/Logo.svg" fill/>
            </div>

            <div className="burgerMenu">
                <Image className="Image" src="/Burger.svg" fill/>
            </div>
        </div>
    );
}
export default Header