"use client";
import Image from "next/image";
import Link from "next/link";
import Lists from "../helpers/navLinks";
import { UserContext } from "../context/userContext";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const logOut = () => {
    window.localStorage.removeItem("auth");
    router.push("/login");
    setState(null);
  };
  return (
    <nav className="nav pt-2 pb-5 pe-4 ps-1">
      <div className="logo">
        <div className="img">
          <Image
            src="/images/logo/main-logo.png"
            width={46}
            height={46}
            alt="logo"
          />
        </div>
        <div className="heading">
          <h2>المعهد العالي للإدارة وتكنولوجيا المعلومات بكفر الشيخ</h2>
        </div>
      </div>
      <div className="list">
        <ul>
          {Lists.map((list) => {
            return (
              <li key={list.id}>
                <span className="icon">
                  <Image
                    src={list.icon}
                    height={25}
                    width={25}
                    alt={list.name}
                    className="ms-2"
                  />
                </span>
                <span className="link">
                  <Link href={list.link}>{list.name}</Link>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-nav">
        <div className="img-user">
          <Image
            src={`${process.env.NEXT_PUBLIC_API}/public/images/users/${
              state && state.user.img
            }  `}
            width={46}
            height={46}
            alt="img-user"
          />
        </div>
        <div className="data-user">
          <div className="name">
            <h4>
              {state ? state.user.fristName + " " + state.user.lastName : ""}
            </h4>
          </div>
          <div className="num">
            <h4>{state && state.user.num}</h4>
          </div>
        </div>
        <div className="log-out">
          <Image
            src="/images/icons/log-out.png"
            width={25}
            height={25}
            alt="log-out"
            onClick={logOut}
          />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
