import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-black text-white px-30">
      <div className="flex align-middle justify-center">
        <Image
          src="/du-icons/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="h-8"
        />
      </div>
      <ul className="flex justify-center align-middle">
        <li>Inicio</li>
      </ul>
    </nav>
  );
}
