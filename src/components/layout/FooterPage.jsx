import React from 'react'

export const FooterPage = () => {
  return (
    <footer>
      <div>
        <section>
        &copy; Iker Ismak Toscano Santos, React proyect

        </section>
        <section className='icon-container'>
        <a href="https://github.com/ikerismak"> <img className="logos-tool" src={"/icons/" + "github" + ".png"} alt="" /></a>
        <a href="https://github.com/ikerismak"> <img className="logos-tool" src={"/icons/" + "linkedin" + ".png"} alt="" /></a>
        </section>
      </div>


    </footer>
  )
}
