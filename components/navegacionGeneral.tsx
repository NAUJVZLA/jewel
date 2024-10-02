'use client'

import { NavList } from "@/public/style/style-global";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Link from "next/link";
import Switcher from "./dark-mode/ThemeSwitcher";
import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";


export default function NavegacionGeneral() {

    const { data: session } = useSession()
    console.log(session);

    return (

        <Navbar shouldHideOnScroll className="shadow-2x1">
            <Switcher />
            <NavbarBrand>
                <Link href="/" className="text-2xl font-light tracking-wider">LUXE FUSION</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            </NavbarContent>
            <NavbarContent justify="end">

                < NavList>
                    <Link href="/Coleccion">Colección</Link>
                </ NavList>
                < NavList>
                    <Link href="/nosotros">Sobre Nosotros</Link>
                </ NavList>
                < NavList>
                    <Link href="/Contactanos">Contacto</Link>
                </ NavList>

                {session?.user ? (
                    < NavList>
                        <Button
                            onClick={async () => {
                                await signOut({
                                    callbackUrl: '/'
                                })
                            }}>LogOut</Button>

                        <p> {session.user.name} {session.user.email} </p>
                        <img
                            src={session.user.image}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </ NavList>
                )
                    : (
                        < NavList>
                            <Button onClick={() => signIn()}>SignIn</Button>
                        </ NavList>
                    )}
            </NavbarContent>

        </Navbar>


    );
}