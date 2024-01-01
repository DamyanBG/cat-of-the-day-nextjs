"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { HOST_URL } from "@/utils/urls";
import { UserContext } from "@/context/UserProvider";

export default function Logout() {
    const { user, setUser } = useContext(UserContext);
    const router = useRouter();

    const postLogOut = () => {
        fetch(`${HOST_URL}/logout`, {
            method: "POST",
            body: JSON.stringify({
                token: user.token,
            }),
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                if (resp.status === 400) {
                    return resp.json();
                }

                if (resp.status === 201) {
                    setUser({});
                    window.localStorage.clear();
                    router.push("/");
                }
                return resp.json();
            })
            .then((json) => {
                console.log(json);
            });
    };

    useEffect(() => {
        postLogOut()
    }, [])

    return (
        <main>
            <section>
                Logging out...
            </section>
        </main>
    );
}