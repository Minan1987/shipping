import React from 'react'
import ContactFrom from './ContactFrom'
import { ImLocation } from "react-icons/im";
import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const ContactUs = () => {
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col-6">
          <h3 className=' fs-5 mb-5'>Get In Touch<hr /></h3>
          <ul className='list-unstyled'>
            <li className='d-flex align-items-start'><ImLocation /><span> Lorance 502B, Tailstoi Town 5048 MT, Worldwide Country</span></li>
            <li><MdPhone /><span> 18004567890</span></li>
            <li><MdOutlineMailOutline /><span> info@industrial.com</span></li>
            <li><LuAlarmClock /><span> Mon - Sat : 9am to 6pm</span></li>
          </ul>
        </div>
        <div className="col-6"><ContactFrom /></div>
      </div>
    </div>
  )
}

export default ContactUs
