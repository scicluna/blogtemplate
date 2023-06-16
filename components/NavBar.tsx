import Login from "./Login"
import Hero from "./Hero"
import NewPost from "./NewPost"
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="shadow-md shadow-red-200 flex justify-end items-end h-2/6 relative font-extrabold text-lg">
            <Hero />
            <Link href="/" className="flex flex-col justify-end items-center h-30 w-30 z-20 mr-5 bg-transparent p-2">Home</Link>
            <NewPost />
            <Login />
        </nav>
    )
}