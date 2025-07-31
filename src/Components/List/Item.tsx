import React, { ComponentProps } from 'react'

export default function Item({children, className}:ComponentProps<'li'>) {
  return (
     <li className={className}>
      {children}
    </li>
  )
}
