import featured  from './assets/imgs/featured-gradient.png'
import spiderNet  from './assets/imgs/spider-net.png'
import brand from './assets/imgs/author-img.png'
import curve  from './assets/imgs/pattern-curve-three.png'
import prodect from './assets/imgs/product-img4.png'
import prodect2 from './assets/imgs/product-img11.png'




const FeaturedAuthor = () => {
  return (
    <section className="w-100 position-relative  overflow-hidden  my-section">
        
            
     {/* Background Image */}
  <img
    src={featured}
    alt="Background"
    className="position-absolute top-0  w-100 h-100 z-n1"
  />

  {/* Left Decoration */}
  <div className="position-absolute top-0 start-0 curve-right z-n1 " >
    <img src={spiderNet} alt="Left" className="img-fluid " />
  </div>

  {/* Right Decoration */}
  <div className="position-absolute top-0 end-0 spider-left z-n1">
    <img
      src={curve}
      alt="Right"
      className="img-fluid"
    />
  </div>
  <div className="container-fluid py-5  "> 
    
    <div className="container">
        <div className="row ">
            <div className="col-xl-5">
              <div className="section-content">
                <div className="section-heading style-left">
                    <h3>Top Featured Author</h3>
                    <p className="w-sm">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
                </div>
                <div className="section-info d-flex align-items-center gab-3">
                 
                 <div className="brand me-5">
                    <img src={brand} alt="" />
                 </div>
                 <div className="info-content">
                    <h1>Amplify</h1>
                    <span>Member Since 2021</span>
                 </div>

                </div>
                <div className="buttons d-flex align-items-center mt-5 ">
                <a href="#" className='btn btn-lg rounded-pill no-hover fw-300'>View Profile</a>
                <a href="#" className='btn btn-lg rounded-pill ms-2'>Follw</a>
                </div>
              </div>
            </div>


            <div className="col-xl-6">
           <div className="row gy-4">
            <div className="col-sm-6">
            <div className="card">
  <img src={prodect} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SaaS dashboard digital products Title here</h5>
     <div className="pric-card d-flex justify-content-between mt-2">
    <div className="">
    <p className="card-text">by<a href="#">themepix</a></p>
    </div>
    <div className="d-flex ">
        <h5 className="fw-bold ">$130</h5>
        <span className="text-decoration-line-through ms-1">$250</span>
        
    </div>
    </div>
    <hr className="border  border-1 m-1 opacity-50"></hr>
    <div className="cart-footer d-flex justify-content-between align-items-center ">
        <div>
            <p>1200 Sales</p>
            <div className="stars-footer-card">
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span> (16) </span>
            </div>
        </div>
        <div>
            <a href="#" className="btn btn-outline-secondary rounded-pill">Live Demo</a>
        </div>
    </div>
    
  </div>
</div>
            </div>
            <div className="col-sm-6 mt-5">
            <div className="card  mt-4">
  <img src={prodect2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SaaS dashboard digital products Title here</h5>
     <div className="pric-card d-flex justify-content-between mt-2">
    <div className="">
    <p className="card-text">by<a href="#">themepix</a></p>
    </div>
    <div className="d-flex ">
        <h5 className="fw-bold ">$130</h5>
        <span className="text-decoration-line-through ms-1">$250</span>
        
    </div>
    </div>
    <hr className="border  border-1 m-1 opacity-50"></hr>
    <div className="cart-footer d-flex justify-content-between align-items-center ">
        <div>
            <p>1200 Sales</p>
            <div className="stars-footer-card">
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span> (16) </span>
            </div>
        </div>
        <div>
            <a href="#" className="btn btn-outline-secondary rounded-pill">Live Demo</a>
        </div>
    </div>
    
  </div>
</div>
            </div>
            <div className="col-sm-6 "style={{marginTop: "-20px"}}>
            <div className="card">
  <img src={prodect2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SaaS dashboard digital products Title here</h5>
     <div className="pric-card d-flex justify-content-between mt-2">
    <div className="">
    <p className="card-text">by<a href="#">themepix</a></p>
    </div>
    <div className="d-flex ">
        <h5 className="fw-bold ">$130</h5>
        <span className="text-decoration-line-through ms-1">$250</span>
        
    </div>
    </div>
    <hr className="border  border-1 m-1 opacity-50"></hr>
    <div className="cart-footer d-flex justify-content-between align-items-center ">
        <div>
            <p>1200 Sales</p>
            <div className="stars-footer-card">
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span> (16) </span>
            </div>
        </div>
        <div>
            <a href="#" className="btn btn-outline-secondary rounded-pill">Live Demo</a>
        </div>
    </div>
    
  </div>
</div>
            </div>
            <div className="col-sm-6 ">
            <div className="card">
  <img src={prodect} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SaaS dashboard digital products Title here</h5>
     <div className="pric-card d-flex justify-content-between mt-2">
    <div className="">
    <p className="card-text">by<a href="#">themepix</a></p>
    </div>
    <div className="d-flex ">
        <h5 className="fw-bold ">$130</h5>
        <span className="text-decoration-line-through ms-1">$250</span>
        
    </div>
    </div>
    <hr className="border  border-1 m-1 opacity-50"></hr>
    <div className="cart-footer d-flex justify-content-between align-items-center ">
        <div>
            <p>1200 Sales</p>
            <div className="stars-footer-card">
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span> (16) </span>
            </div>
        </div>
        <div>
            <a href="#" className="btn btn-outline-secondary rounded-pill">Live Demo</a>
        </div>
    </div>
    
  </div>
</div>
            </div>
           </div>
            </div>

        </div>

    </div>
  </div>
</section>
  

  );
};

export default FeaturedAuthor;