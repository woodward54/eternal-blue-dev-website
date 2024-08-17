import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Home from '../src/components/Home'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Layout from '../src/layouts/Layout'
const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PROJECTS */}
      <Projects />
      {/* /PROJECTS */}
      {/* SKILLS */}
      {/* <Skills /> */}
      {/* /SKILLS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  )
}
export default Index
