"use client"

import { deleteSelfUser, getSelfUserInfo } from "@/api/userApi"
import { UserContext } from "@/context/UserProvider"
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react"

interface UserInfo {
    first_name: string;
    last_name: string;
    email: string;
}

const initialUserInfo: UserInfo = {
    first_name: "",
    last_name: "",
    email: "",
}

export default function Profile() {
    const { user, setUser } = useContext(UserContext)
    const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo)
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState(false)

    const getAndSetUserInfo = async () => {
        const gotUserInfo = await getSelfUserInfo(user.token)
        console.log(gotUserInfo)
        setUserInfo(gotUserInfo)
    }
    
    const handleOnDelete = async () => {
        setIsDeleting(true)
        try {
            await deleteSelfUser(user.token)
            setUser({})
            localStorage.removeItem("user")
            router.push("/")
        } catch {
            setIsDeleting(false)
        }
    }

    useEffect(() => {
        if (user.token) getAndSetUserInfo()
    }, [user.token])

    return (
        <main>
            <section className="profile">
                <h2>Profile Info</h2>
                <p>First name: {userInfo.first_name}</p>
                <p>Last name: {userInfo.last_name}</p>
                <p>Email: {userInfo.email}</p>
                <button type="button" onClick={handleOnDelete} disabled={isDeleting}>Delete Profile</button>
            </section>
        </main>
    )
}