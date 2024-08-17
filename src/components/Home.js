import { useContext } from 'react'
import { context } from '../context/context'
import AnimatedText from './AnimatedText'
import { aboutData } from '../aboutData'

const Home = () => {
  const { changeNav } = useContext(context)
  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home w-full h-auto clear-both float-left text-center">
          <h3 className="name text-white-color text-[72px] font-bold uppercase mb-[20px]">
            {aboutData.firstName}
            <span className="text-pink-color"> {aboutData.lastName}</span>
          </h3>
          <h3 className="job text-3xl font-medium text-main-color mb-[40px]">
            <AnimatedText />
          </h3>
          <div className="edrea_tm_button transition_link">
            <a href="#contact" onClick={() => changeNav('contact')}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
