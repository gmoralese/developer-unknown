import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../container";
import { links } from "./navbar-links";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex justify-center bg-black text-white px-30 w-full pb-14">
      <Container>
        <div className="flex justify-between w-full">
          <div className="flex align-middle justify-center">
            <Image
              src="/du-icons/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="h-8 cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>
          <ul className="flex justify-center items-center">
            {links.map((link, index) => {
              return (
                <li className="px-8" key={index}>
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push(link.link)}
                  >
                    {link.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
