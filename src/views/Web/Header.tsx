import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import MobMenu from "./MobMenu"

export default function Header() {
    const activeStyle: any = ({ isActive }: any) => (isActive ? { color: '#C73168' } : { color: '' })
    const [mobMenu, setMobMenu] = useState<boolean>(false)
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [innerWidth])

    const setmenu = (data: boolean) => {
        setMobMenu(data)
    }

    return (
        <>
            {innerWidth >= 768 ?
                <div className="flex items-center w-full bg-white py-4 px-8 justify-end">
                    <NavLink className="mx-6 text-xl" style={activeStyle}
                        to={'/'}>
                        Home
                    </NavLink>
                    <NavLink className="mx-6 text-xl" style={activeStyle}
                        to={'/discover'}>
                        Profile
                    </NavLink>
                    <NavLink className="mx-6 text-xl" style={activeStyle}
                        to={'/chats'} >
                        Chats
                    </NavLink>
                </div> :
                <span className="flex absolute right-4 top-4 z-10">
                    <RxHamburgerMenu color="white" size={24} onClick={() => setMobMenu(true)} />
                </span>
            }
            {/* **** */}
            {mobMenu && <MobMenu setmenu={setmenu} />}
        </>
    )
}