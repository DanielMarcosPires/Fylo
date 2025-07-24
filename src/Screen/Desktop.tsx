/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { StyleWeb } from "@/app/globals";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./css/style.css"
import { FaChevronCircleRight } from "react-icons/fa";

export default function Desktop() {
  return (
    <>
      <header className="flex justify-center py-5">
        <div className="flex justify-between w-4/5">
          <Image
            width={140}
            height={45}
            src="/images/logo.svg"
            alt="Fylo logo"
          />
          <nav className="flex gap-5">
            <Link
              className="hover:underline hover:opacity-100 opacity-75"
              href={"#"}
            >
              Feature
            </Link>
            <Link
              className="hover:underline hover:opacity-100 opacity-75"
              href={"#"}
            >
              Teams
            </Link>
            <Link
              className="hover:underline hover:opacity-100 opacity-75"
              href={"#"}
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>
      <section className="flex relative flex-col items-center justify-center">
        <img
          className="relative z-20"
          src="/images/illustration-intro.png"
          alt="Ilustração"
        />
        <div className="flex relative z-20 text-center flex-col items-center gap-3 w-8/12 py-4">
          <h1 className="text-4xl w-2/3">
            All your files in one secure location, accesible anywhere.
          </h1>
          <p className="text-md w-3/4 opacity-75">
            Fylo stories all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-wokers.
          </p>
          <button
            className="p-5 rounded-2xl w-2/6"
            style={StyleWeb.StyleComponent.GetStarted}
          >
            <p className="text-2xl font-bold">Get Started</p>
          </button>
        </div>
        <img
          src="/images/bg-curvy-desktop.svg"
          className="absolute bottom-0 z-0"
          alt="nada"
        />
      </section>
      <section style={StyleWeb.DesktopStyle.bgNavy900}>
        <ul className="flex flex-wrap justify-around py-28">
          <li className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img width={70} src="/images/icon-access-anywhere.svg" alt="" />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">
                Access your files, anywhere
              </h2>
              <p className="opacity-90">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
          </li>
          <li className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img width={70} src="/images/icon-security.svg" alt="" />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">Security you can trust</h2>
              <p className="opacity-90">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </li>
          <li className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img width={70} src="/images/icon-collaboration.svg" alt="" />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">Real-time collaboration</h2>
              <p className="opacity-90">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
          </li>
          <li className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img width={70} src="/images/icon-any-file.svg" alt="" />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">Store any type of file</h2>
              <p className="opacity-90">
                Whether {"your`re"} sharing holidays photos or work documents,
                Fylo has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section
        className="flex justify-center py-28"
        style={StyleWeb.DesktopStyle.bgNavy900}
      >
        <ul className="flex gap-8 w-4/5">
          <li>
            <img
              width={1200}
              src="/images/illustration-stay-productive.png"
              alt=""
            />
          </li>
          <li className="px-4">
            <h2 className="text-4xl font-bold py-4">
              Stay productive, wherever you are
            </h2>
            <p className="opacity-80">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="opacity-80 py-2">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>

            <Link className="flex items-center gap-2 text-blue-400" href="#">
              <p>See how fylo works</p>
              <FaChevronCircleRight />
            </Link>
          </li>
        </ul>
      </section>
      <section style={StyleWeb.DesktopStyle.bgNavy900}>
        <div className="flex justify-center relative py-28">
          <ul className="flex gap-8 relative justify-between w-5/6">
            <img
              className="absolute -left-4 -top-4"
              src="/images/bg-quotes.png"
            />
            <li
              className="w-sm p-4 rounded-2xl z-10"
              style={StyleWeb.DesktopStyle.bgNavy800}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita maxime, incidunt quod facere laboriosam et fugit saepe
                cumque ratione deserunt nobis asperiores. At et porro quae aut
                natus ea quasi!
              </p>
              <div className="flex gap-2 pt-3">
                <img
                  width={50}
                  className="rounded-full"
                  src="/images/profile-1.jpg"
                  alt="perfil"
                />
                <div>
                  <h3 className="font-bold">Satish Patel</h3>
                  <p className="opacity-80">Founder & CEO, huddle</p>
                </div>
              </div>
            </li>
            <li
              className="w-sm p-4 rounded-2xl"
              style={StyleWeb.DesktopStyle.bgNavy800}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita maxime, incidunt quod facere laboriosam et fugit saepe
                cumque ratione deserunt nobis asperiores. At et porro quae aut
                natus ea quasi!
              </p>
              <div className="flex gap-2 pt-3">
                <img
                  width={50}
                  className="rounded-full"
                  src="/images/profile-1.jpg"
                  alt="perfil"
                />
                <div>
                  <h3 className="font-bold">Satish Patel</h3>
                  <p className="opacity-80">Founder & CEO, huddle</p>
                </div>
              </div>
            </li>
            <li
              className="w-sm p-4 rounded-2xl"
              style={StyleWeb.DesktopStyle.bgNavy800}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita maxime, incidunt quod facere laboriosam et fugit saepe
                cumque ratione deserunt nobis asperiores. At et porro quae aut
                natus ea quasi!
              </p>
              <div className="flex gap-2 pt-3">
                <img
                  width={50}
                  className="rounded-full"
                  src="/images/profile-1.jpg"
                  alt="perfil"
                />
                <div>
                  <h3 className="font-bold">Satish Patel</h3>
                  <p className="opacity-80">Founder & CEO, huddle</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="relative flex justify-center" style={StyleWeb.DesktopStyle.bgNavy950}>
        <div className="flex flex-col gap-2 relative -top-15 w-1/2 p-5 rounded-xl  sombra" style={StyleWeb.DesktopStyle.bgNavy900}>
          <h2 className="text-2xl font-bold">Get early access today</h2>
          <p className="">
            it only takes a minutes to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form className="flex gap-2" action="">
            <input className="bg-white placeholder:text-black placeholder:opacity-80 p-4 rounded-lg" type="text" placeholder="Email@example.com" />
            <button 
              className="rounded-lg px-2 font-bold" 
              style={StyleWeb.StyleComponent.GetStarted}
            >
              Get Started For free
            </button>
          </form>
        </div>
      </section>
      <footer className="flex justify-center">
        <div className="w-4/5">
          <img src="/images/logo.svg" alt="" />
        </div>
        <nav>
          
        </nav>
      </footer>
    </>
  );
}
