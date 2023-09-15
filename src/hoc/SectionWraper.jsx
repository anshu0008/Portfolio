import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../utils/motion'


 const SectionWraper=(Component,idName)=>
 function HOC() {
  return (
    <div>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;    {/*empty space */}
        </span>
        <Component />
      </motion.section>
    </div>
  )
}

export default SectionWraper;