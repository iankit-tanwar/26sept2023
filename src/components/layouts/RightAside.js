import React from 'react'

export default function RightAside() {
  return (
    <aside className='col-3 p-0'>
      <ul className="nav flex-column text-white clr mt-2 mb-2">
        <li className="nav-item">
          <h3 className='d-flex justify-content-center mt-4'>What?</h3>
          <p className='p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </li>
        <li className="nav-item">
          <h3 className='d-flex justify-content-center '>Where?</h3>
          <p className='p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </li>
        <li className="nav-item">
          <h3 className='d-flex justify-content-center '>How?</h3>
          <p className='p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </li>

      </ul>
    </aside>
  )
}
