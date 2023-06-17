import Login from "./Login"
import Hero from "./Hero"
import NewPost from "./NewPost"
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="shadow-md shadow-red-200 flex justify-between items-end h-1/6 min-h-[33%] relative font-extrabold text-lg w-full">
            <Hero />
            <Link href="/" className="flex flex-col justify-end items-center h-30 w-40 z-20 mr-5 bg-transparent p-2 text-red-200 hover:text-black transition-all duration-300">
                Home
            </Link>
            <NewPost />
            <Login />
        </nav>
    )
}