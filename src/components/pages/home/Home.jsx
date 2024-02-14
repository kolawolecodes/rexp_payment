import { useTheme } from '@mui/material'
import React from 'react'
import Package from './Package'
import Footer from "../footer/Footer";
import ForumIcon from '@mui/icons-material/Forum';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';




function Home() {
  const {palette} = useTheme();
  return (
    <div className='thisHome'>
      <div className='thisHome_innercontainer'>
        <div className='title_documentstion'>
            <h2>RexPay Documentation</h2>
          </div>
          {/* Line 1 (SDK and payment) */}
        <div className='package_line'>
          <Package
            empty= ""
            title= "SDKs and Plugings"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
          <Package 
              empty= "" 
            title= "Collect Payment"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
        </div>
        {/* line 2 */}
        <div className='package_line' id='package_line2'>
          <Package
            empty= ""
            title= "SDKs and Plugings"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
          <Package 
              empty= "" 
            title= "Recurrent Payments"
            content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eligendi."
          />
        </div>
      </div>

    </div>
  )
}

export default Home