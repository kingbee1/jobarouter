import { Outlet, NavLink } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className='help-layout'>
        <h2>Website Help</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum mollitia aliquid?</p>

        <nav>
            <NavLink to="faq">View FAQ Here</NavLink>
            <NavLink to="contact" >Contact Us</NavLink>
        </nav>

        <Outlet />
        
    </div>
  )
}
