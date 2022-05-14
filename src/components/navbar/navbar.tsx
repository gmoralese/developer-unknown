import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import { links } from "./navbar-links";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-black text-white px-30 w-full">
      <Container>
        <div className="flex justify-between w-full">
          <div className="flex align-middle justify-center">
            <Image
              src="/du-icons/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="h-8"
            />
          </div>
          <ul className="flex justify-center items-center">
            {links.map((link, index) => {
              return (
                <Link href={link.link} passHref key={index}>
                  <li className="px-8">
                    <span className="cursor-pointer">{link.name}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
