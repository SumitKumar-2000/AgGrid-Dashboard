import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineDashboard, MdOutlineChat, MdDehaze } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({children}) => {

  const [isOpen, setIsOpen] = useState(true)
  
  const routes = [
    {
      path : "/grid",
      name : "Grid View",
      icon : <MdOutlineDashboard />
    },
    {
      path : "/chart",
      name : "Chart View",
      icon : <MdOutlineChat/>,
      visited : false,
    },
  ]

  const ShowAnimation = {
    hidden : {
      width : 0,
      opacity : 0,
      transition : {
        duration : 0.5,
      }
    },
    show : {
      width : "auto",
      opacity : 1,
      transition : {
        duration : 0.2
      }
    }
  }

  return (
    <div className='mainContainer'>
        <motion.div animate={{width : isOpen ? "15%" : "4%", transition:{
          duration : 0.5,
          type : "tween",
          damping : 10
        }}} className='sidebar'>
          <div className="topSection" style={isOpen ? {justifyContent : "space-between"} : {justifyContent : "center"}}>
            {isOpen && <motion.div 
              className="topSection_Head"
              variants={ShowAnimation}
              initial="show"
              show="hidden"
              exit="hidden"
            >
              Bookings
            </motion.div>}
            <MdDehaze className='topSection_logo cursorPointer' onClick={()=>setIsOpen(!isOpen)} />
          </div>

          <section className='routes'>
            {routes.map(route => (
              <NavLink             
                to={route.path} 
                key={route.name} 
                className='routeLink'
                style={isOpen ? {gap : "0 1rem", justifyContent: "normal"} : {justifyContent : "center"}}
              >
                <div>{route.icon}</div>
                <AnimatePresence 
                  variants={ShowAnimation}
                  initial="hidden"
                  show="show"
                  exit="hidden"
                >
                  {isOpen && <motion.div className="routeName">{route.name}</motion.div>}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main className='mainChildContainer' style={isOpen ? {width : "85%"} : {width : "96%"}}>
          {children}
        </main>
    </div>
  )
}

export default Sidebar
