import { Link } from "react-router-dom";
import { BiLogOut } from 'react-icons/bi'
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function Header() {

    async function handleSignOut() {
        await signOut(auth)
    }

    return (
        <header className=" rounded-md bg-white flex items-center justify-between mt-8 max-w-2xl w-full h-12 px-4">
            <nav className="flex gap-4 font-medium">
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"/admin"}>
                    Links
                </Link>
                <Link to={"/admin/social"}>
                    Redes Sociais
                </Link>
            </nav>

            <button onClick={handleSignOut}>
                <BiLogOut size={28} color="#db2629"/>
            </button>
        </header>
    )
}