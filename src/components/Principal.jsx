import React from 'react'

import { Link } from 'react-router-dom'
import { WorkList } from './WorkList'

export const Principal = () => {
  return (
    <div className='home'>
      <h1> Hi im <strong>Iker Toscano</strong> I am a mechatronics engineer with 3 years of experience in
manufacturing as a product development and customer delivery
planner. I am a master's student in software engineering and an
aspirant <strong>web developer</strong> .</h1>

      <h2><Link to="/contacto" className='contact-home'>Contact</Link></h2>
      <section>
        <h2 className='heading'>Projects</h2>
        <div>

          <WorkList/>

        </div>
      </section>
    </div>
  )
}
