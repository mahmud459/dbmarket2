import featured  from './assets/imgs/featured-gradient.png'
import spiderNet  from './assets/imgs/spider-net.png'
import curve  from './assets/imgs/pattern-curve-three.png'
import brand from './assets/imgs/author-img.png'
import prodect from './assets/imgs/product-img4.png'
import prodect2 from './assets/imgs/product-img11.png'

function Performance (){
    return(
        <section className="w-100 position-relative  overflow-hidden my-section2 mt-5 py-4 ">
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
  <div className="container">
    <div className="row gy-4 align-items-center flex-wrap-reverse">
        <div className="col-lg-7 pe-lg-5">
        <div className="performance-content">
          <div className="performance-content__item">
            <span className="performance-content__text fw-bold">Email Subscription</span><h4 className="performance-content__count">49,000+</h4>
            </div>
            <div className="performance-content__item"><span className="performance-content__text fw-bold">Total Products</span><h4 className="performance-content__count">45,000+</h4>
            </div>
            <div className="performance-content__item"><span className="performance-content__text fw-bold">Total Download</span><h4 className="performance-content__count">48,000+</h4>
            </div>
            <div className="performance-content__item"><span className="performance-content__text fw-bold">Monthly Visitor</span><h4 className="performance-content__count">65,000+</h4>
            </div>
            </div>
        </div>

        <div className="col-lg-5">
        <div className="section-content">
            <div className="section-heading style-left">
                <h3 className="section-heading__title">Top Performance</h3><p className="section-heading__desc font-18 w-sm">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
                </div>
                <a href="#" className='btn btn-lg rounded-pill  fw-300 btn-main mt-3'>View Profile</a>
                </div>
        </div>
        
    </div>
  </div>
        </section>
    );
};
export default Performance;