import React from 'react'
import './contentpage.css'
import logo from './toslogo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGear, faHeart,faBookMedical, faHandHoldingDollar, faMoneyBillTransfer,faCircleInfo,faPassport,faClockRotateLeft,faSackDollar,faPiggyBank,faCommentsDollar,faTicket,faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ContentPage = () => {
  return (
    <div className='ContentPage'>
        <div className='logo'>
          <img src={logo} alt='' className='logo-img'/>
        </div>
        <br/>
        <div className='searchbar'>
          <input type='search' placeholder='search..'/>
          
        </div>
        
        <div className='intro'>
          <h1>Welcome, Muhammad</h1>
          <h5 style={{color:"white"}}>Your Last Login was : 12,MAY,2023 | 3:23</h5>
        </div>
        <div className='payments'>
          <h2 >Payments</h2>
          <div className='pay-bills pay-box'>
          <div className='icon-s'>
          <FontAwesomeIcon icon={faEnvelope}  />
          </div>
            <span > Pay Bills</span>

          </div>
          <div className='fund-transfer pay-box'>
          <div className='icon-s'>
          <FontAwesomeIcon icon={faMoneyBillTransfer}  />
          </div>
            <span >Fund Transfer</span>
          </div>
          <div className='favourites pay-box'>
          <div className='icon-s'><FontAwesomeIcon icon={faHeart} /></div>
            <span >Favourites</span>

          </div>
          <div className='Tickets pay-box'>
          <div className='icon-s'><FontAwesomeIcon icon={faTicket} /></div>
            <span >Tickets</span>

          </div>
          <div className='online-shopping pay-box'>
            <div className='icon-s'>
          <FontAwesomeIcon icon={faCartShopping} />
          </div>
            <span >Online Shopping</span>

          </div>          
          <div className='donation pay-box'>
            <div className='icon-s'>
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          </div>
            <span >Donation</span>

           </div>

        </div>
        <div className='quick-access'>
          <h2 >Quick Access</h2>
          <div className='pay-box'>
            <div className='icon-s'>
          <FontAwesomeIcon icon={faGear} />
          </div>
            <span >Settings</span>

          </div>
          <div className=' pay-box'>
            <div className='icon-s'>
          <FontAwesomeIcon icon={faCircleInfo} />
          </div>
            <span  >Account Details</span>

          </div>
          <div className=' pay-box'>
            <div className='icon-s'>
          <FontAwesomeIcon icon={faBookMedical} />
          </div>
            <span >Transaction History</span>

          </div>
          <div className=' pay-box'>
          <div className='icon-s'>
          <FontAwesomeIcon icon={faGear} />
          </div>
            <span >Account statment</span>

          </div>
          <div className='pay-box'>
            <div className='icon-s'>
          <FontAwesomeIcon icon={faPassport} />
          </div>
            <span >Password settings</span>

          </div>          
          <div className=' pay-box'>
            <div className='icon-s'>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          </div>
            <span >General History</span>

           </div>

        </div>
        <div className='asd'>
         <div>
         <FontAwesomeIcon icon={faSackDollar} /><br/>
          Income : RS 35,000 
          </div>
         <div>
         <FontAwesomeIcon icon={faPiggyBank} /><br/>
          Saving : RS 12,000
          </div>
         <div>
         <FontAwesomeIcon icon={faCommentsDollar} /><br/>
          Expense : RS 23,000
          </div>

        </div>

    </div>
  )
}

export default ContentPage