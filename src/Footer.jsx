import brand1 from './assets/imgs/brand-img1.png'
import brand2 from './assets/imgs/brand-img2.png'
// import brand3 from '../public/assets/imgs/brand-img3.png'
import brand4 from './assets/imgs/brand-img4.png'
import patern from './assets/imgs/pattern.png'
import footerbg from './assets/imgs/footer-gradient.png'
import whitLogo from './assets/imgs/white-logo.png'
import './Footer.css'


function SiteFooter (){
    return(
        <>
        <div className="brand">
        <div className="container">
          <div className="brand-slider d-flex justify-content-around">
              <div className="brand-item d-flex align-items-center justify-content-center">
                <img
                  src={brand1}
                  alt=""
                  className="white-version"
                />
                {/* <img
                  src={brand4}
                  alt=""
                  className="dark-version"
                /> */}
              </div>
              <div className="brand-item d-flex align-items-center justify-content-center">
                <img
                  src={brand2}
                  alt=""
                  className="white-version"
                />
                {/* <img
                  src={brand3}
                  alt=""
                  className="dark-version"
                /> */}
              </div>
              <div className="brand-item d-flex align-items-center justify-content-center">
                <img
                  src={brand4}
                  alt=""
                  className="white-version"
                />
                {/* <img
                  src={brand3}
                  alt=""
                  className="dark-version"
                /> */}
              </div>
              <div className="brand-item d-flex align-items-center justify-content-center">
                <img
                  src={brand1}
                  alt=""
                  className="white-version"
                />
                {/* <img
                  src={brand4}
                  alt=""
                  className="dark-version"
                /> */}
              </div>
              <div className="brand-item d-flex align-items-center justify-content-center">
                <img
                  src={brand1}
                  alt=""
                  className="white-version"
                />
                {/* <img
                  src={brand2}
                  alt=""
                  className="dark-version"
                /> */}
              </div>
              {/* <div className="brand-item d-flex align-items-center justify-content-center">
                <img
                  src={brand3}
                  alt=""
                  className="white-version"
                />
                <img
                  src="assets/images/thumbs/brand-white-img3.png"
                  alt=""
                  className="dark-version"
                />
              </div> */}
          </div>
        </div>
      </div>
       {/* footer start-------- */}
    <footer className="footer-section">
    <img
      src={patern}
      alt=""
      className="bg-pattern"
    />
    {/* <img
      src={}
      alt=""
      className="element one"
    />
    <img
      src="assets/images/shapes/element2.png"
      alt=""
      className="element two"
    /> */}
    <img
      src={footerbg}
      alt=""
      className="bg--gradient"
    />
    <div className="container container-two">
      <div className="row gy-5">
        <div className="col-xl-3 col-sm-6">
          <div className="footer-widget">
            <div className="footer-widget__logo">
              {/* <Link to="/">
                <img src={whitLogo} alt="" />
              </Link> */}
              <a href="#"> <img src={whitLogo} alt="" /></a>
            </div>
            <p className="footer-widget__desc">
              Lorem consultancy elitsed do eiusmod tempor inci didunt ut
              labore dolore magna aliqua sed do eiusmod.
            </p>
            <div className="footer-widget__social">
              <ul className="social-icon-list d-flex list-unstyled">
                <li className="social-icon-list__item">
                    <a href="#">
                        <span><i className="fa-brands fa-facebook"></i></span>
                    </a>
                </li>

                <li className="social-icon-list__item">
                  <a href="#">
                    <span><i className="fa-brands fa-x-twitter"></i></span>
                  </a>
                </li>

                <li className="social-icon-list__item">
                    <a href="#">
                        <span><i className="fa-brands fa-linkedin"></i></span>
                    </a>
                </li>
                <li className="social-icon-list__item">
                 
                  <a href="#">
                    <span><i className="fa-brands fa-instagram"></i></span>
                  </a>
                    <i className="fab fa-pinterest-p" />
                  
                </li>

                <li className="social-icon-list__item">
                  <a href="#">
                    <span><i className="fa-brands fa-youtube"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-sm-6 col-xs-6">
          <div className="footer-widget">
            <h5 className="footer-widget__title text-white ">Useful Link</h5>
            <ul className="footer-lists">
              <li className="footer-lists__item">
                {/* <Link to="/all-product" className="footer-lists__link">
                  Product
                </Link> */}
                
                <a href="#">Product</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link
                  to="/product-details"
                  className="footer-lists__link"
                >
                  Product Details
                </Link> */}
                <a href="#"> Product Details</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link to="/profile" className="footer-lists__link">
                  Profile
                </Link> */}
                <a href="#"> Profile</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link to="/cart" className="footer-lists__link">
                  Shopping Cart
                </Link> */}
                <a href="#">Shopping Cart</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link to="/dashboard" className="footer-lists__link">
                  Dashboard
                </Link> */}
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
          <div className="footer-widget">
            <h5 className="footer-widget__title text-white">Quick Links</h5>
            <ul className="footer-lists">
              <li className="footer-lists__item">
                {/* <Link to="/dashboard" className="footer-lists__link">
                  Dashboard
                </Link> */}
                <a href="#">Dashboard</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link to="/login" className="footer-lists__link">
                  Login{" "}
                </Link> */}
                <a href="#">Login</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link to="/register" className="footer-lists__link">
                  Register
                </Link> */}
                <a href="#"> Register</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link to="/blog" className="footer-lists__link">
                  Blog{" "}
                </Link> */}
                <a href="#">Blog</a>
              </li>
              <li className="footer-lists__item">
                {/* <Link to="/blog-details" className="footer-lists__link">
                  Blog Details
                </Link> */}
                <a href="#">Blog Details</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="footer-widget">
            <h5 className="footer-widget__title text-white">Subscribe</h5>
            <p className="footer-widget__desc">
              Subscribe our newsletter to get updated the latest news
            </p>
            <form
              action="#"
              className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2"
            >
              <input
                type="text"
                className="form-control common-input pill rounded-pill text-white"
                placeholder="Enter Mail"
              />
              <button
                type="submit"
                className="btn btn-main btn-lg w-100  btn rounded-pill fw-bold "
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* bottom Footer */}
  {/* <div className="bottom-footer">
    <div className="container container-two">
      <div className="bottom-footer__inner flx-between gap-3">
        <p className="bottom-footer__text font-14">
          Copyright © 2024 DPmarket, All rights reserved.
        </p>
        <div className="footer-links">
          <Link to="#" className="footer-link font-14">
            Terms of service
          </Link>
          <Link to="#" className="footer-link font-14">
            Privacy Policy
          </Link>
          <Link to="/contact" className="footer-link font-14">
            cookies
          </Link>
        </div>
      </div>
    </div>
  </div> */}
</>
    );
};
export default SiteFooter;