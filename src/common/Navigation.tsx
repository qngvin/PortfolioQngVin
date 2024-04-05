import { NavLink } from 'react-router-dom'


export default function Navigation() {
  return (
    <div className='absolute top-0 left-0 z-[99999] flex items-center justify-center w-full p-28  py-4'>
      <div className='text-white bg-black p-4 px-6 shadow-box_shadow_2 rounded-full  font-mina text-[18px] flex gap-10 backdrop-filter backdrop-blur-xl '>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-yellow_1' : '')}>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-yellow_1' : '')}>
          About
        </NavLink>
        <NavLink to='/skill' className={({ isActive }) => (isActive ? 'text-yellow_1' : '')}>
          Skills
        </NavLink>
        <NavLink to='/services' className={({ isActive }) => (isActive ? 'text-yellow_1' : '')}>
          Services
        </NavLink>
        <NavLink to='/portfolio' className={({ isActive }) => (isActive ? 'text-yellow_1' : '')}>
          Portfolio
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-yellow_1' : '')}>
          Contact
        </NavLink>
      </div>
    </div>
  )
}
