import Login from "./Login"
import Hero from "./Hero"

export default function NavBar() {
    return (
        <nav className="shadow-md shadow-red-200 flex justify-end items-end h-2/6 relative">
            <Hero />
            <Login />
        </nav>
    )
}