import { memo, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const AnimatedText = () => {
  // const [text, setText] = useState(0)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setText(text < homeData.skills.length - 1 ? text + 1 : 0)
  //   }, 4000)
  //   return () => clearInterval(interval)
  // })
  return (
    <span className="cd-headline rotate-1">
      {/* <span className="blc">Creative </span> */}
      <span className="cd-words-wrapper text-center">
        {'> '}
        <TypeAnimation
          sequence={[
            'Developer',
            4000,
            'Creative',
            4000,
            'Builder',
            4000,
            'Product Designer',
            4000,
            'Hacker',
            4000,
          ]}
          cursor={false}
          repeat={Infinity}
          className="type-animation-cursor text-white-color"
        />
      </span>
    </span>
  )
}
export default memo(AnimatedText)
