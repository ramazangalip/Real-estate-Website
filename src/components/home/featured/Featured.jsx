import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Size En uygun evleri bulun.' subtitle='Bütün aradığınız çeşit evler burada' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
