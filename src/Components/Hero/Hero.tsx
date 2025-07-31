/* eslint-disable @next/next/no-img-element */
import { StyleWeb } from "@/app/globals";
import React from "react";

export default function Hero() {
  return (
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
  );
}
