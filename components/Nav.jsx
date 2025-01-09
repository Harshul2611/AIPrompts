"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    return (
        <nav>
            <Link href="/">
                <Image src="/assets/images/logo.svg" alt="Promptopia Logo" width={30} height={30} />
            </Link>
        </nav>
    )
}

export default Nav