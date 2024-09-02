"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/loot-logo.png"}
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">Loot</p>
      </Link>

      {/* Desktop Navigation */}
      <div className=" sm:flex hidden">
        {isUserLoggedIn ? (
          <div className=" flex gap-3 md:gap-5">
            <Link href={"/"} className=" black_btn">
              My Games
            </Link>

            <button type="button" className="outline_btn">
              Sign Out
            </button>

            <Link href={"/profile"}>
              <Image
                src={"/assets/images/loot-logo.png"}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_button"
                ></button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src={"/assets/images/loot-logo.png"}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prevouseState) => !prevouseState)}
            />

            {toggleDropdown && (
                <div className="dropdown">
                    <Link
                    href={"/profile"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                    >
                     My Profile
                    </Link>
                    <Link
                    href={"/"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                    >
                     My Games
                    </Link>
                    <button 
                    className="mt-5 w-full black_btn"
                    type="button"
                    onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                    }}
                    >
                        Sign Out
                    </button>
                </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_button"
                ></button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
