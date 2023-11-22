import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Bir sorunuz var mı?Bize iletin hemen cevaplayalım</h1>
              <p>Biz size hemen yardımcı olacağız.</p>
            </div>
            <button className='btn5'>Bugün iletişime geçin.</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Yardıma ihtiyacınız mı var?</h2>
              <p>Email adresinizi bırakın hemen size geri dönelim...</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Gönder</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 RentUP. Designd By Ramazan Said Galip.</span>
      </div>
    </>
  )
}

export default Footer
