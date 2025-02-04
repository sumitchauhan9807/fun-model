import { MdLogin } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";

export default function MobMenu(props: any) {

    const closeMenu = () => {
        props.setmenu(false)
    }

    return (
        <div className="flex fixed top-0 z-10 h-full w-full bg-popup_bg">
            <div className="flex absolute w-full h-full" onClick={closeMenu}></div>
            <ul className="relative bg-main-pink top-[-100%] right-[-100%] w-full h-max p-8 rounded-bl-mobmenuRds animate-[wiggle_0.5s_ease-in-out_forwards] z-10">
                <h1 className="text-2xl font-semibold text-white absolute flex right-8 mt-8">~ MENU</h1>
                <NavLink to={'/'} className="flex items-center text-white text-lg mt-24 p-4 font-normal" onClick={closeMenu}>
                    HOME
                </NavLink>
                <NavLink to={'/login'} className="flex items-center text-white text-lg p-4 font-normal" onClick={closeMenu}>
                    LOGIN
                </NavLink>
                <NavLink to={'/signup'} className="flex items-center text-white text-lg p-4 font-normal" onClick={closeMenu}>
                    SIGN UP
                </NavLink>
                <NavLink to={'/discover'} className="flex items-center text-white text-lg p-4 font-normal" onClick={closeMenu}>
                    PROFILE
                </NavLink>
                <NavLink to={'/chats'} className="flex items-center text-white text-lg p-4 font-normal" onClick={closeMenu}>
                    CHATS
                </NavLink>
            </ul>
        </div>
    )
}