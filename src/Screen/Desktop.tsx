/* eslint-disable @next/next/no-img-element */
import { StyleWeb } from "@/app/globals";
import Link from "next/link";
import React from "react";
import "./css/style.css";
import {
  FaChevronCircleRight,
  FaMapMarkerAlt,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import { List } from "@/Components/List";

export default function Desktop() {
  return (
    <>
      <Header className="flex gap-4">
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
      </Header>
      <Hero />
      <section style={StyleWeb.DesktopStyle.bgNavy900}>
        <List._ className="flex flex-wrap">
          <List.Item className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img width={70} src="/images/icon-access-anywhere.svg" alt="Icon access anywhere" />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">
                Access your files, anywhere
              </h2>
              <p className="opacity-90">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
          </List.Item>
          <List.Item className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img
              width={70}
              src="/images/icon-security.svg"
              alt={"Icon Security"}
            />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">Security you can trust</h2>
              <p className="opacity-90">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </List.Item>
          <List.Item className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img
              width={70}
              src="/images/icon-collaboration.svg"
              alt={"Icon collaboration"}
            />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">Real-time collaboration</h2>
              <p className="opacity-90">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
          </List.Item>
          <List.Item className="flex p-5 flex-col justify-center items-center text-center flex-1/2">
            <img width={70} src="/images/icon-any-file.svg" alt={"Any File"} />
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">Store any type of file</h2>
              <p className="opacity-90">
                Whether {"your`re"} sharing holidays photos or work documents,
                Fylo has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </div>
          </List.Item>
        </List._>
      </section>
      <section
        className="flex justify-center py-28"
        style={StyleWeb.DesktopStyle.bgNavy900}
      >
        <List._ className="flex gap-8 w-4/5">
          <List.Item>
            <img
              width={1200}
              src="/images/illustration-stay-productive.png"
              alt="Illustration stay productive"
            />
          </List.Item>
          <List.Item className="px-4">
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
          </List.Item>
        </List._>
      </section>
      <section style={StyleWeb.DesktopStyle.bgNavy900}>
        <div className="flex justify-center relative py-28">
          <List._ className="flex gap-8 relative justify-between w-5/6">
            <List.Item
              className="w-sm p-4 rounded-2xl z-10"
              style={StyleWeb.DesktopStyle.bgNavy800}
            >
              <img
                className="absolute -left-4 -top-4"
                src="/images/bg-quotes.png"
                alt={"background quotes"}
              />
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
            </List.Item>
            <List.Item
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
            </List.Item>
            <List.Item
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
            </List.Item>
          </List._>
        </div>
      </section>
      <section
        className="relative flex justify-center"
        style={StyleWeb.DesktopStyle.bgNavy950}
      >
        <div
          className="flex flex-col gap-2 relative -top-15 w-1/2 p-5 rounded-xl  sombra"
          style={StyleWeb.DesktopStyle.bgNavy900}
        >
          <h2 className="text-2xl font-bold">Get early access today</h2>
          <p className="">
            it only takes a minutes to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form className="flex gap-2" action="">
            <input
              className="bg-white placeholder:text-black placeholder:opacity-80 p-4 rounded-lg"
              type="text"
              placeholder="Email@example.com"
            />
            <button
              className="rounded-lg px-2 font-bold"
              style={StyleWeb.StyleComponent.GetStarted}
            >
              Get Started For free
            </button>
          </form>
        </div>
      </section>
      <footer className="flex flex-col items-center pt-20 pb-10">
        <div className="w-4/5">
          <img src="/images/logo.svg" alt="Logo Fylo in footer" />
        </div>
        <nav className="flex justify-around w-4/5">
          <div>
            <a className="flex items-center gap-2" href="#">
              <FaMapMarkerAlt />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </a>
          </div>
          <div className="flex flex-col">
            <a className="flex items-center gap-2" href="">
              <FaPhoneVolume /> +1-543-123-4567
            </a>
            <a className="flex items-center gap-2" href="">
              <MdEmail />
              example@fylo.com
            </a>
          </div>
          <div className="flex flex-col">
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Jobs</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Blog</Link>
          </div>
          <div className="flex flex-col">
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Terms</Link>
            <Link href={"#"}>Privacy </Link>
          </div>
        </nav>
      </footer>
    </>
  );
}
