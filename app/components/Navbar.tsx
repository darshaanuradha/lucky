import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Lucky</div>

        {/* Navigation */}
        <div className="flex gap-6">
          <Link href="/" className="text-slate-300 hover:text-white">
            Home
          </Link>

          {/* <Link href="/about" className="text-slate-300 hover:text-white">
            About
          </Link>

          <Link href="/services" className="text-slate-300 hover:text-white">
            Services
          </Link>

          <Link href="/contact" className="text-slate-300 hover:text-white">
            Contact
          </Link> */}
          <Link href="/character" className="text-slate-300 hover:text-white">
            Character
          </Link>
          <Link href="/weakness" className="text-slate-300 hover:text-white">
            Weaknesses
          </Link>
        </div>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
          Login
        </button>
      </div>
    </nav>
  );
}
