import React from 'react'

export default function Services() {
  return (
    <div>
        <div className="slider-area ">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap">
                  <h2>My Services</h2>
                  <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item"><a href="/services">My Services</a></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    <section className="categories-area categories-area2  section-padding30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-pen" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">UI/UX Design</a></h5>
                  <p>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-speaker" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Digital Marketing</a></h5>
                  <p>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-portfolio" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Website Design</a></h5>
                  <p>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-portfolio" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Website Design</a></h5>
                  <p>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-speaker" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Digital Marketing</a></h5>
                  <p>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-pen" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">UI/UX Design</a></h5>
                  <p>Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section className="wantToWork-area w-padding2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>Dont worry for contact i`m available</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <a href="/" className="btn btn-danger f-right">Contact Me Now</a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="contact-info-area w-padding2" data-background="assets/img/gallery/section_bg04.jpg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-7">
              <div className="contact-caption mb-50">
                <h3>If Not Now, When? Let’s Work Together!</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
                <img src="assets/img/gallery/xsin.png.pagespeed.ic.4L7r6tiIs5.webp" alt="" data-pagespeed-url-hash={564202676} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
            <form action="/" className="container">
                    <input type="text" name="name" placeholder="Full Name" className="mb-2 my-3 mx-3"/>
                    
                    <input type="email" name="email" placeholder="Email Address" className="mb-2 my-3 mx-3" />
                    <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} className="mb-2 my-3 mx-3"/>
                    <br></br>
                    <button className="btn btn-primary" type="submit">Send Message</button>
                  </form>
            </div>
          </div>
        </div>
      </div>
     
      
    </div>


  )
}
