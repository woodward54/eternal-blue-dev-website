const type = {
  NAV: 'NAV',
  COLOR: 'COLOR',
  CURSOR: 'CURSOR',
  SKILLS_POPUP: 'SKILLS_POPUP',
  PROJECTS_POPUP: 'PROJECTS_POPUP',
  ABOUT_POPUP: 'ABOUT_POPUP',
}

import { createContext, useReducer } from 'react'
import { activeSection } from '../utilities'
const context = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      }
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      }
    case type.CURSOR:
      return {
        ...state,
        magicCursor: action.payload,
      }
    case type.SKILLS_POPUP:
      return {
        ...state,
        skillsPopup: !state.skillsPopup,
        skillsData: action.payload,
      }
    case type.PROJECTS_POPUP:
      return {
        ...state,
        projectsPopup: !state.projectsPopup,
        projectsData: action.payload,
      }
    case type.ABOUT_POPUP:
      return {
        ...state,
        aboutPopup: !state.aboutPopup,
      }
    default:
      return state
  }
}

const state = (props) => {
  const initialState = {
    nav: 'home',
    color: '#00bafe',
    magicCursor: 'show',
    skillsPopup: false,
    skillsData: null,
    projectsPopup: false,
    aboutPopup: false,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeNav = (value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    })
    activeSection(value)
  }
  const getMagicCursor = (value) => {
    let cursor = localStorage.getItem('edreaa-megic-cursor')
    dispatch({
      type: type.CURSOR,
      payload: cursor ? cursor : value,
    })
    document
      .querySelector('.edrea_tm_all_wrap')
      .setAttribute('data-magic-cursor', cursor ? cursor : value)
  }

  const changeCursor = (value) => {
    document
      .querySelector('.edrea_tm_all_wrap')
      .setAttribute('data-magic-cursor', value)
    localStorage.setItem('edreaa-megic-cursor', value)
    dispatch({
      type: type.CURSOR,
      payload: value,
    })
  }

  const getColor = (value) => {
    let color = localStorage.getItem('edreaa-color')
    document.documentElement.style.setProperty(
      '--pink-color',
      color ? color : value
    )
    dispatch({
      type: type.COLOR,
      payload: color ? color : value,
    })
  }

  const colorChange = (value) => {
    document.documentElement.style.setProperty('--pink-color', value)
    localStorage.setItem('edreaa-color', value)
    dispatch({
      type: type.COLOR,
      payload: value,
    })
  }

  const showSkillsPopup = (value) => {
    dispatch({
      type: type.SKILLS_POPUP,
      payload: value,
    })
  }

  const showProjectsPopup = (data) => {
    dispatch({
      type: type.PROJECTS_POPUP,
      payload: data,
    })
  }
  const showAboutPopup = () => {
    dispatch({
      type: type.ABOUT_POPUP,
    })
  }

  const {
    nav,
    color,
    magicCursor,
    skillsPopup,
    skillsData,
    projectsPopup,
    projectsData,
    aboutPopup,
  } = state
  return (
    <context.Provider
      value={{
        changeNav,
        nav,
        colorChange,
        getColor,
        color,
        getMagicCursor,
        changeCursor,
        magicCursor,
        showSkillsPopup,
        skillsPopup,
        skillsData,
        showProjectsPopup,
        projectsPopup,
        projectsData,
        aboutPopup,
        showAboutPopup,
      }}
    >
      {props.children}
    </context.Provider>
  )
}

export default state

export { context }
