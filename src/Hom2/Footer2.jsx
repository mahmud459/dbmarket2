import React from 'react';
import foote2rbg from '../assets/imgs/footer2-gradient-bg.png'
import whitLogo from '../assets/imgs/white-logo.png'
import patern1 from '../assets/imgs/footer2-pattern1.png'
import patern2 from '../assets/imgs/footer2L-pattern2.png'
// import footerBg from '../assets/imgs/footer-gradient.png';

import styles from './Footer2.module.css'

function SiteFooter2 (){
    return(
        <>
        
       {/* footer start-------- */}
       <footer className={styles.footerSection}>
      <img src={foote2rbg} alt="" className={styles.bgPattern} />
      <img src={patern1} alt="not found" className="position-absolute end-0 top-0 z-1 h-100" />
      <img src={patern2} alt="not found" className="position-absolute start-0 top-0 z-1 h-100 "/>

      <div className="container container-two">
        <div className="row gy-5">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget">
              <div className={styles.footerWidgetLogo}>
                <a href="#"><img src={whitLogo} alt="Logo" /></a>
              </div>
              <p className={styles.footerWidgetDesc}>
                Lorem consultancy elitsed do eiusmod tempor incididunt ut
                labore dolore magna aliqua sed do eiusmod.
              </p>
              <div className={styles.footerWidgetSocial}>
                <ul className="d-flex list-unstyled ">
                  <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-sm-6 col-xs-6">
            <div className="footer-widget">
              <h4 className={styles.footerHraders}>Useful Link</h4>
              <ul className={styles.footerLists}>
                <li className={styles.footerListsItem}><a href="#">Product</a></li>
                <li className={styles.footerListsItem}><a href="#">Product Details</a></li>
                <li className={styles.footerListsItem}><a href="#">Profile</a></li>
                <li className={styles.footerListsItem}><a href="#">Shopping Cart</a></li>
                <li className={styles.footerListsItem}><a href="#">Dashboard</a></li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
            <div className="footer-widget">
              <h5 className={styles.footerHraders}>Quick Links</h5>
              <ul className={styles.footerLists}>
                <li className={styles.footerListsItem}><a href="#">Dashboard</a></li>
                <li className={styles.footerListsItem}><a href="#">Login</a></li>
                <li className={styles.footerListsItem}><a href="#">Register</a></li>
                <li className={styles.footerListsItem}><a href="#">Blog</a></li>
                <li className={styles.footerListsItem}><a href="#">Blog Details</a></li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4 col-sm-6">
          <div className="footer-widget">
              <h5 className={styles.footerHraders}>Categoreis</h5>
              <ul className={styles.footerLists}>
                <li className={styles.footerListsItem}><a href="#">Dashboard</a></li>
                <li className={styles.footerListsItem}><a href="#">Login</a></li>
                <li className={styles.footerListsItem}><a href="#">Register</a></li>
                <li className={styles.footerListsItem}><a href="#">Blog</a></li>
                <li className={styles.footerListsItem}><a href="#">Blog Details</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className='position-relative'>
    <hr className='opacity-25 z-0 position-absolute w-100 text-body-tertiary' />
    </div>
  {/* bottom Footer */}
   <div className="bottom-footer mt-5">
    <div className="container container-two">
      <div className="bottom-footer__inner d-flex justify-content-between gap-3">
        <p className="">
          Copyright © 2024 DPmarket, All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#">Terms of service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">cookies</a>
        </div>
      </div>
    </div>
  </div> 
</>
    );
};
export default SiteFooter2;