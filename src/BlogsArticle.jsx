import featured from "./assets/imgs/featured-gradient.png";
import spiderNet from "./assets/imgs/spider-net.png";
import curve from "./assets/imgs/pattern-curve-three.png";
import blog1 from "./assets/imgs/blog1.png";
import blog2 from "./assets/imgs/blog2.png";
import blog3 from "./assets/imgs/blog3.png";
import seller1 from "./assets/imgs/seller-bg.png";
import seller2 from "./assets/imgs/seller-bg-two.png";
import arrow from "./assets/imgs/arrow-shape.png";
import sepport from "./assets/imgs/support-img.png";

function ArticlesS() {
  return (
    <>
      <section className="w-100 position-relative  overflow-hidden my-section py-5 mt-5 ">
        <img
          src={featured}
          alt="Background"
          className="position-absolute top-0  w-100 h-100 z-n1"
        />

        {/* Left Decoration */}
        <div className="position-absolute top-0 start-0 curve-right z-n1 ">
          <img src={spiderNet} alt="Left" className="img-fluid " />
        </div>

        {/* Right Decoration */}
        <div className="position-absolute top-0 end-0 spider-left z-n1">
          <img src={curve} alt="Right" className="img-fluid" />
        </div>
        <div>
          <div className="container">
            <div className="row d-flex justify-content-between ">
              <div className="col-md-4 ">
                <div className="section-heading d-flex justify-content-between align-items-center gap-3">
                  <div className="section-heading__inner">
                    <h3 className="section-heading__title">
                      Browse all latest blogs and articles
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end ">
                <div>
                  <a
                    href="#"
                    className="btn btn-lg rounded-pill  fw-400 btn-main mt-3"
                  >
                    Browse All Articles
                  </a>
                </div>
              </div>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="card  mt-4 border border-0 shadow-sm bg-body-tertiary rounded">
                  <img src={blog1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className="pric-card d-flex justify-content-between mt-2">
                      <div>
                        <p className="card-text">
                          <a href="#">Hiring</a>
                        </p>
                      </div>
                      <div className="d-flex ">
                        <span>
                          <i className="fa-regular fa-calendar me-2"></i>
                        </span>
                        <h5 className="">Jan 17, 2024</h5>
                      </div>
                    </div>
                    <h5 className="card-title py-3 fw-bold">
                      How to hire a right business executive for your company
                    </h5>

                    <div className="cart-footer d-flex justify-content-start align-items-center ">
                      <div>
                        <a
                          href="#"
                          className="btn btn-outline-secondary rounded-pill"
                        >
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card  mt-4 border border-0 shadow-sm bg-body-tertiary rounded">
                  <img src={blog2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className="pric-card d-flex justify-content-between mt-2">
                      <div>
                        <p className="card-text">
                          <a href="#">Hiring</a>
                        </p>
                      </div>
                      <div className="d-flex ">
                        <span>
                          <i className="fa-regular fa-calendar me-2"></i>
                        </span>
                        <h5 className="">Jan 17, 2024</h5>
                      </div>
                    </div>
                    <h5 className="card-title py-3 text-dark fw-bold">
                      How to hire a right business executive for your company
                    </h5>

                    <div className="cart-footer d-flex justify-content-start align-items-center ">
                      <div>
                        <a
                          href="#"
                          className="btn btn-outline-secondary rounded-pill "
                        >
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card  mt-4 border border-0 shadow-sm bg-body-tertiary rounded">
                  <img src={blog3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className="pric-card d-flex justify-content-between mt-2">
                      <div>
                        <p className="card-text">
                          <a href="#">Hiring</a>
                        </p>
                      </div>
                      <div className="d-flex ">
                        <span>
                          <i className="fa-regular fa-calendar me-2"></i>
                        </span>
                        <h5 className="">Jan 17, 2024</h5>
                      </div>
                    </div>
                    <h5 className="card-title py-3 text-dark fw-bold">
                      How to hire a right business executive for your company
                    </h5>

                    <div className="cart-footer d-flex justify-content-start align-items-center ">
                      <div>
                        <a
                          href="#"
                          className="btn btn-outline-secondary rounded-pill "
                        >
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second row strt */}
      <section className="mt-5 up-section-header">
        <div className="container">
          <div className="row py-4 g-4">
            <div className="col-md-6">
              <div className="seller-item position-relative ">
                <img
                  src={seller1}
                  className="position-absolute start-0 top-0 "
                  alt=""
                  style={{ zIndex: "-1" }}
                />
                <h1 className="seller-item__title fw-bold">
                  Earn 75% of the ItemD Price
                </h1>
                <p className="seller-item__desc fw-semibold text-heading py-5">
                  Sellers receive 75% of the Itemp Price for items Dsold
                  exclusively and 50% for items sold non-exclusively. See
                  detailed informationabout the fee structure on Market.
                </p>
                <div>
                  <a
                    href="#"
                    className="btn btn-lg btn-outline-secondary rounded-pill fw-bold text-dark px-5"
                  >
                    Become A Seller
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="seller-item seller-right position-relative ">
                <img
                  src={seller2}
                  className="position-absolute start-0 top-0 "
                  alt=""
                  style={{ zIndex: "-1" }}
                />
                <h1 className="seller-item__title fw-bold">
                  Earn until 40% commission
                </h1>
                <p className="seller-item__desc fw-semibold text-heading py-5">
                  Our Market is the worlds largest creative market place,
                  selling millions of digital assets every year. With 30%
                  affiliate commission, earning money has never been easier!
                </p>
                <div>
                  <a
                    href="#"
                    className="btn btn-lg btn-outline-secondary rounded-pill fw-bold text-dark px-5"
                  >
                    Become A Seller
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                <div className="support position-relative z-index-1">
                  <img
                    src={spiderNet}
                    alt=""
                    className="spider-net position-absolute top-0 end-0"
                    style={{ zIndex: "1", width: "40%" }}
                  />
                  <img src={arrow} alt="" className="arrow-shape" />
                  <div className="row align-items-center">
                    <div className="col-lg-1 d-lg-block d-none"></div>
                    <div className="col-lg-3 col-md-4 d-md-block d-none">
                      <div className="support-thumb text-center">
                        <img src={sepport} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-lg-block d-none"></div>
                    <div className="col-lg-5 col-md-8 z-2">
                      <div className="support-content">
                        <h1 className="support-content__title mb-3 fw-bold">
                          Support 24/7
                        </h1>
                        <p className="fs-5">
                          Wanna talk? Send us a message
                        </p>
                        <a
                          className="btn btn-static-black btn-lg fw-300 pill"
                          href="mailto:infomail@office.com"
                        >
                          infomail@office.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default ArticlesS;
