import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
       <h1 className='heading'>Contact</h1>

      <div className='contact-container'>
      <div className='contact-left'>

      <form className='contact' action='mailto: ikerismak@gmail.com'>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="text" placeholder='Email' />
        <textarea placeholder='motivo de contacto...'></textarea>
        <input type="submit" value="Enviar"/>
      </form>
      <div className='contact-options'>
        <p>This option is not available, to contact please send an e-mail</p>

        <div><a href="https://mail.google.com/"> <img className="logos-tool" src={"/icons/" + "gmail" + ".png"} alt="" /></a>ikerismak@gmail</div>
        <h3>or</h3>

        <div className='logos-contact'>

        <a href="https://github.com/ikerismak"> <img className="logos-tool" src={"/icons/" + "github" + ".png"} alt="" /></a>
         <a href="https://github.com/ikerismak"> <img className="logos-tool" src={"/icons/" + "linkedin" + ".png"} alt="" /></a>

        </div>



      </div>

      </div>
      <div className='contact-rigth'>
      <img src={"/images/" + "iker"+ ".jpeg"} alt="" />


      </div>
      </div>





    </div>
  )
}
