'use client';
import { usePathname } from 'next/navigation';
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import Image from "next/image";

const links = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon,
    },
    {
        name: 'Projet',
        href: '/home/projet',
        icon: UserGroupIcon,
    },
    {
        name: 'Expérience',
        href: '/home/experience',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'Compétences',
        href: '/home/competence',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'Contact',
        href: '/home/contact',
        icon: UserGroupIcon,
    },
];



export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex">

            <Image
                src="/photo.jpg"
                width={20}
                height={20}
                alt="Your Photo"
                className="w-8 h-8 rounded-full mr-2" // Adjust the styling as needed
            />
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center justify-center gap-2 p-3 text-sm font-medium rounded-md
              hover:bg-gray-700 hover:text-blue-200
              md:flex-none md:justify-end md:p-2 md:px-3
              ${pathname === link.href ? 'bg-sky-200 text-blue-600' : ''}`}
                    >
                        <LinkIcon className="w-6"/>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}
