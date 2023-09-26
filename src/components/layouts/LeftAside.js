import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
    <aside className='col-3 p-0'>
    <ul className="nav flex-column">
      <li className="nav-item  clr mt-2">
        <Link className="nav-link active text-white" aria-current="page" href="flight">The Flight</Link>
      </li>
      <li className="nav-item mt-2 clr ">
        <Link className="nav-link text-white" href="city">The City</Link>
      </li>
      <li className="nav-item mt-2 clr ">
        <Link className="nav-link text-white" href="island">The Island</Link>
      </li>
      <li className="nav-item mt-2 clr">
        <Link className="nav-link text-white" href="food">The Food</Link>
      </li>
    </ul>
  </aside>
  )
}
