"use client";
import { BuiltInProviderType } from "next-auth/providers/index";
import { signIn, getProviders, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function LoginButton({ forMobile = false }: { forMobile: boolean }) {
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);

    useEffect(() => {
        getProviders().then(setProviders);
    }, [])
    if (!providers) {
        return <>nothing</>
    }
    const result = Object.values(providers).map((provider, index) => <button key={index}
        onClick={async () => await signIn()}
        className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
    >
        {!forMobile && <FaGoogle className="text-white mr-2" />}
        <span>Login or Register</span>
    </button>)

    return <>
        {result}
    </>

}