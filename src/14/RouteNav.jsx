import { Link } from "react-router-dom"

export default function RouteNav() {
  return (
    <ul className="justify-self-center flex flex-row mt-10">
        <Link to="/" className="mx-3">
            <li className="rounded-lg bg-amber-200 hover:bg-amber-400 py-3 px-4 font-semibold">
                Home
            </li>
        </Link>
        <Link to="/p1/menu/none" className="mx-3">
            <li className="rounded-lg bg-amber-200 hover:bg-amber-400 py-3 px-4 font-semibold">
                page1
            </li>
        </Link>
        <Link to="/p2" className="mx-3">
            <li className="rounded-lg bg-amber-200 hover:bg-amber-400 py-3 px-4 font-semibold">
                page2
            </li>
        </Link>
    </ul>
  )
}
