/* eslint-disable @next/next/no-img-element */
import React, { ComponentProps } from "react";

export default function Hero({children}:ComponentProps<'div'>) {
  return (
    <section className="flex relative flex-col items-center justify-center">
      <img
        className="relative z-10"
        src="/images/illustration-intro.png"
        alt="Ilustração"
      />
      <div className="flex relative z-20 text-center flex-col items-center gap-3 w-8/12 py-4">
        {children}
      </div>
      <img
        src="/images/bg-curvy-desktop.svg"
        className="absolute bottom-0 z-0"
        alt="nada"
      />
    </section>
  );
}
