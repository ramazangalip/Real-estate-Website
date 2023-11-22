import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Bizimle İletişime Geçin' title='Size Yardım Edelim' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Formu Doldurun</h4> <br />
            <div>
              <input type='text' placeholder='İsim' />
              <input type='email' placeholder='Email' />
            </div>
            <input type='text' placeholder='Konu' />
            <textarea cols='30' rows='10'></textarea>
            <button>Gönder</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
