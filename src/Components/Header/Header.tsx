import Image from 'next/image'
import React, { ComponentProps } from 'react'

export default function Header({className, children}:ComponentProps<'header'>) {
  return (
    <header className="flex justify-center py-5">
        <div className="flex justify-between w-4/5">
          <Image
            width={140}
            height={45}
            src="/images/logo.svg"
            alt="Fylo logo"
          />
          <nav className={className}>
            {children}
          </nav>
        </div>
      </header>
  )
}
