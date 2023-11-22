import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Bir sonraki evinizi burda bulun. ' subtitle='Size en yakın ve en uygun kriterlerdeki eve ulaşın.' />

          <form className='flex'>
            <div className='box'>
              <span>Sokak/Cadde</span>
              <input type='text' placeholder='Lokasyon' />
            </div>
            <div className='box'>
              <span>Özellikler</span>
              <input type='text' placeholder='Özellik' />
            </div>
            <div className='box'>
              <span>Fiyat Aralığı</span>
              <input type='text' placeholder='Fiyat Aralığınız' />
            </div>
            <div className='box'>
              <h4>Filtrele</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search' style={{color:'black'}}></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
