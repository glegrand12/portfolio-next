'use client';
import Image from "next/image";
import NavLinks from "@/app/home/navbar";
import Link from "next/link";




export default function Contact() {
    return(
        <>
            <NavLinks />
            <h1 className="mb-5 mt-5 text-center font-bold text-3xl">CONTACT</h1>
            <div className="mt-5 mb-5 text-center">
                <span className="font-bold">call</span>
                <p className="mb-5">
                    06.13.07.57.35
                </p>
                <span id="span" className="material-symbols-outlined">mail</span>
                <p className="mb-5">
                    <a href="mailto:contact@gregoire-legrand.fr" className="text-decoration-none">contact@gregoire-legrand.fr</a>
                </p>
                <p className="mb-5">
                    <Image alt="GitHub" src="/logo/github.png" height={25} width={25} className="mx-auto" />
                    <Link href="https://github.com/glegrand12" className="text-decoration-none" target="_blank">github</Link>
                </p>
                <p className="mb-5">
                    <Image alt="GitLab" src="/logo/gitlab.png" height={25} width={25} className="mx-auto" />
                    <Link href="https://gitlab.com/gregouse" className="text-decoration-none" target="_blank">gitlab</Link>
                </p>
                <p>
                    <Image alt="LinkedIn" src="/logo/linkedin.png" height={25} width={25} className="mx-auto" />
                    <Link href="https://www.linkedin.com/in/gregoire-legrand/" className="text-decoration-none" target="_blank">linkedin</Link>
                </p>
            </div>


        </>
    )
}