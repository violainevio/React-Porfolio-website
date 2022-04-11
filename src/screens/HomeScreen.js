import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../components/header/Header";

const HomeScreen = () => {
  return (
    <>
      {/* Header */}
      <Header bgColor="black" />

      {/* Home screen */}
      <div className="Mainbackground" id="home">
        <div className="topBackground"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001517"
            fillOpacity="1"
            d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        <div className="container fluids">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="screenWords">
                <h1>Hello, I'm Irene.</h1>
                <p>
                  A full-stack developer. Specializing in building exceptional
                  trending mobile applications and websites. Feel free to take a
                  look at my latest projects. Remotely available UTC−1 to UTC+8.
                  project@irenemmassy.com Tel:+255 065 535 2744
                </p>
                <div className="twoMainButton">
                  <div className="buttonMain">
                    <NavLink to="/app">Mobile Apps</NavLink>
                    <div className="hrizontalLine"></div>
                  </div>
                  <div className="buttonMain">
                    <NavLink to="/website">Websites</NavLink>
                    <div className="hrizontalLine diff"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="screenImage">
                <img src="./images/main2.png" alt="irene blog" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="section" id="services">
        <div className="container rows">
          <Tabs defaultActiveKey="services" className="tab">
            <Tab eventKey="services" title="Services" className="tablinks">
              <div className="tabcontent" id="services">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img
                          src="https://image.flaticon.com/icons/svg/426/426487.svg"
                          alt="Web Development"
                        />
                      </div>
                      <div className="sectionWords">
                        <h4>Web Development</h4>
                        <p>
                          Expand your business outreach by capitalizing on web
                          development services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img
                          src="./assets/images/img2.svg"
                          alt="Mobile Development"
                        />
                      </div>
                      <div className="sectionWords">
                        <h4>Mobile Development</h4>
                        <p>
                          Optimize smart ways to deal with the customers.Hire
                          skilled mobile app developer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img
                          src="./assets/images/img3.png"
                          alt="PWA development"
                        />
                      </div>
                      <div className="sectionWords">
                        <h4>PWA development</h4>
                        <p>
                          Progressive Web Apps, it can be said that this is a
                          new technology for interacting with the target
                          audience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img
                          src="./assets/images/img6.svg"
                          alt="Cross-Platform App"
                        />
                      </div>
                      <div className="sectionWords">
                        <h4>Cross-Platform App</h4>
                        <p>
                          Using React Native and flutter to build single app
                          that performs on both Android and iOS.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img
                          src="./assets/images/img4.svg"
                          alt="UX/UI Designs"
                        />
                      </div>
                      <div className="sectionWords">
                        <h4>UX/UI Designs</h4>
                        <p>
                          intuitive, user-friendly products for the success of
                          your business to create a human-friendly visual
                          language.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img
                          src="./assets/images/img5.svg"
                          alt="Digital Marketing"
                        />
                      </div>
                      <div className="sectionWords">
                        <h4>Digital Marketing</h4>
                        <p>
                          Data-driven strategies maximize lifecycle value by
                          align your technology and marketing execution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="technology" title="Technology" className="tablinks">
              <div className="tabcontent" id="technology">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img7.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Mobile Development</h4>
                        <ul>
                          <li>Flutter Framework</li>
                          <li>Android Apps</li>
                          <li>React Native</li>
                          <li>Ionic Framework</li>
                          <li>Xamarin Framework</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img8.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>UX/UI Designs</h4>
                        <ul>
                          <li>Sketch</li>
                          <li>Figma</li>
                          <li>Flinto</li>
                          <li>Adobe XD</li>
                          <li>Blender</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img9.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Web Development</h4>
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>ReactJs</li>
                          <li>Jquery</li>
                          <li>JSON</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img10.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>E-commerce</h4>
                        <ul>
                          <li>Shopify</li>
                          <li>WooCommerce</li>
                          <li>Drubal</li>
                          <li>Magento</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img11.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Server Side</h4>
                        <ul>
                          <li>Node.js</li>
                          <li>PHP</li>
                          <li>Express.js Framework</li>
                          <li>Laravel Framework</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="industry" title="Industry" className="tablinks">
              <div className="tabcontent" id="industry">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img12.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Construction</h4>
                        <p>
                          Advanced software solutions that take Construction
                          into the Digital Era.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img13.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Healthcare</h4>
                        <p>
                          Patient-friendly software that empowers healthcare
                          industry workers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img14.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Retail & ECommerce</h4>
                        <p>
                          Engaging and exciting software solutions for modern
                          retail.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img15.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>FinTech</h4>
                        <p>
                          Meet the demands of modern customers in speed and
                          security with scalable financial technology
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img16.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Travel & Hospitality</h4>
                        <p>
                          Extend the comfort of your resort with practical
                          software solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="sectionBox">
                      <div className="sectionImage">
                        <img src="./assets/images/img17.svg" alt="blockchain" />
                      </div>
                      <div className="sectionWords">
                        <h4>Logistics</h4>
                        <p>
                          Use all the latest tech available to make your
                          logistics run like clockwork.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="aboutMeImg">
                    <img src="./images/gifs/about.jpg" alt="about me" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me">
                    <h5>About me</h5>
                    <div className="aboutHorizontalLine"></div>
                    <p>
                      I enjoy creating things that live on the internet, whether
                      that be websites, applications, or anything in between. My
                      goal is to always build products that provide
                      pixel-perfect, performant experiences.
                    </p>
                    <p>
                      Familiarity with Front End High level programming such as
                      HTML, CSS, ReactJS, XML, jQuery and JSON. Server Side
                      coding skills Node.js and Php Frameworks(
                      Express.js,Laravel).
                    </p>
                    <p>
                      Understanding of data structures algorithms including data
                      migration, transformation and analysis. Deploying,
                      managing, and operating scalable, highly available, and
                      fault tolerant systems on AWS.
                    </p>
                    <p>
                      Excellent communication skills on both Swahili and
                      English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div className="contactme" id="contact">
        <div className="contactOverlay">
          <div className="container">
            <div className="form">
              <form action="" onSubmit="">
                <div className="formWord">
                  <h2>Say Hello!</h2>
                  <span>Full Name</span>
                  <br />
                  <input
                    className="input100"
                    type="text"
                    name="fullName"
                    required
                  />
                  <br />
                  <span>Phone Number</span>
                  <br />
                  <input
                    className="input100"
                    type="text"
                    name="phone"
                    required
                  />
                  <br />
                  <span>Enter Email</span>
                  <br />
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    required
                  />
                  <br />
                </div>
                <div className="formWord">
                  <span>Message</span>
                  <br />
                  <textarea name="message" required></textarea>
                  <br />
                  <button>SUBMIT</button>

                  {/* <div className="row">{showResults ? <Results /> : null}</div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="container" id="blogs">
        <div className="article">
          <h2>Recent Work</h2>
          <hr />
          <div className="rows">
            <div className="shop col-lg-3 col-md-4 col-sm-6">
              <div className="shopBack">
                <img src="./assets/images/recent1.png" alt="recent" />
                <div className="shoplebal">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="shoptext">
                <p>Sell And Buy App</p>
                <h3>
                  Another app ever from zpnet company. Lorem Ipsum has been the
                  industry's
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
