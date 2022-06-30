import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import img1 from './assets/images/60111.jpg'
import img3 from './assets/images/3.jpg'
import './assets/css/style.css'
function App() {
  return (
    <>
      <Container fluid className="pb-0 colorr">
        <Row >
          <Col lg='12' className="mb-4  mt-2">
            <Card>
              <div className="" style={{ height: '206px' }}>
                <img src={img3} alt="header" className="img-fluid w-100 h-100"
                />
              </div>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="profile-img position-relative me-3 mb-3 mb-lg-0">
                      <img src={img1} className="img-fluid img1 img11-100 img111-rounded"
                        alt="imagee" />
                    </div>

                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row >
          <Col md='12' >
            <Row>
              <Col lg='3'>
                <Card className=" mb-3 " style={{ backgroundColor: 'transparent' }}>
                  <Card.Header >
                    <div className="header-title">
                      <h4 className="card-title text-primary">News</h4>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div>
                      <div className="d-flex justify-content-between">
                        <p>Nikita Singh</p>
                        <small className='text-primary' style={{ fontSize: '12px' }}>EF2211211</small>
                      </div>
                      <p style={{ fontSize: '14px' }}>
                        Saving US TAX for foreign Real Estate Investors Consulting & Compliance Solutions with a smile
                      </p>
                      <div>
                        <p><small style={{ fontSize: '12px', paddingRight: '8px' }}>Designationn: </small> UX Designer</p>
                        <p><small style={{ fontSize: '12px', paddingRight: '8px' }}>Industry: </small> Information Technology</p>
                        <p><small style={{ fontSize: '12px', paddingRight: '8px' }}>City: </small> Mumbai( Maharashtra )</p>
                        <p><small style={{ fontSize: '12px', paddingRight: '8px' }}>Experience: </small> 5 Yrs</p>
                      </div>
                      <div className="d-flex justify-content-between p-2 ">
                        <div className="text-center boxborder p-2">
                          <h5 className='text-primary'>500</h5>
                          <small>connection</small>
                        </div>
                        <div className="text-center boxborder p-2">
                          <h5 className='text-primary'>200</h5>
                          <small>followers</small>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>


              </Col>
              <Col lg='6' >
                <div className="">

                  <Card>
                    <Card.Header className="d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Confidential Information</p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="pencil" size="1x" />

                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0 pt-2">
                      <div className="d-flex justify-content-around">
                        <p>Email: nikitasingh@gmail.com</p>
                        <p>Email: nikitasingh@gmail.com</p>
                      </div>
                      <div style={{ paddingLeft: '54px' }}>
                        <p>Mobile No: 8291445559</p>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Resume</p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="plus" size="1x" />

                      </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <div className="d-flex justify-content-around pt-2">
                        <p>Upload your Resume</p>
                        <p>Download system generated Resume</p>
                      </div>
                    </Card.Body>
                  </Card>


                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Cover Note
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="pencil" size="1x" />

                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <div className=" d-flex align-items-center p-3  ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque
                          sem massa purus non dapibus auctor. Vel, fringilla sit sit magna netus. Et urna dui
                          volutpatquisque. Neque auctor mi, viverra lorem semper arcu a. Non quis
                          praesent enim massa vitae aliquam aliquam. Vitae pretium amet sit odio cursus
                          tellus convallis.Rnare vitae id gravida nam ut augue</p>
                      </div>
                    </Card.Body>
                  </Card>




                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Profile Summary

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="pencil" size="1x" />

                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <div className=" d-flex align-items-center p-3  ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque
                          sem massa purus non dapibus auctor. Vel, fringilla sit sit magna netus. Et urna dui
                          volutpatquisque. Neque auctor mi, viverra lorem semper arcu a. Non quis
                          praesent enim massa vitae aliquam aliquam. Vitae pretium amet sit odio cursus
                          tellus convallis.Rnare vitae id gravida nam ut augue</p>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className=" mt-3">
                    <Card.Header className="d-flex ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Activity
                            </p>
                          </div>
                        </div>
                      </div>

                    </Card.Header>
                    <Card.Body className=" p-0">
                      <ul className=" p-0 m-0" style={{ listStyle: 'none' }}>
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                            <div className="ms-3">
                              <h6 className="mb-1">Please provide your feedback. Many Thanks!!
                              </h6>
                              <p className="mb-1">Nikita Singh liked this
                              </p>

                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex ms-3">
                            <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                            <div className="ms-3">
                              <h6 className="mb-1">How do you interpret my content ?
                              </h6>
                              <p className="mb-1">Nikita Singh liked this
                              </p>

                            </div>
                          </div>
                          <div className="d-flex justify-content-center pb-2" >
                            <small>See all activity
                            </small>
                          </div>
                        </li>
                      </ul>
                    </Card.Body>

                  </Card>


                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Experience

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="plus" size="1x" />

                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <ul className=" p-0 m-0" style={{ listStyle: 'none' }} >
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between ">
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h5 className="">UI/UX Designer <sup>.</sup> Full time</h5>
                                  </div>
                                </div>
                                <div className="pe-3">
                                  <FontAwesome name="pencil" size="1x" />

                                </div>
                              </div>
                              <small>Employee Forums | Human Resources
                              </small><br />
                              <small>Period: Currently working since Nov 2021 <sup>.</sup> 2m
                              </small><br />
                              <small className="">orem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis ultrices eu
                                faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                              </small><br />
                              <div className="d-flex justify-content-end pe-3">
                                <button className="btn btn-outline-primary rounded-pill"><small>Add reference</small> </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <hr />
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between ">
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h5 className="">UI/UX Designer <sup>.</sup> Full time</h5>

                                  </div>
                                </div>

                                <div className="pe-3">
                                  <FontAwesome name="pencil" size="1x" />

                                </div>
                              </div>                                       <small>Employee Forums | Human Resources
                              </small><br />
                              <small>Period: Currently working since Nov 2021 <sup>.</sup> 2m
                              </small><br />
                              <small className="">orem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis ultrices eu
                                faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                              </small><br />

                              <div className="d-flex justify-content-end pe-3">
                                <button className="btn btn-outline-primary rounded-pill"><small>Add reference</small> </button>

                              </div>
                            </div>

                          </div>
                        </li>
                      </ul>
                    </Card.Body>

                  </Card>
                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Key Skills

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="pencil" size="1x" />
                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <div className=" d-flex justify-content-evenly   pb-3 pt-2">
                        <button type="button" className="btn btn-outline-light rounded-pill  ">UI Design</button>
                        <button type="button" className="btn btn-outline-light rounded-pill ">UX Design</button>
                        <button type="button" className="btn btn-outline-light rounded-pill ">Angular</button>
                        <button type="button" className="btn btn-outline-light rounded-pill  ">HTML</button>

                      </div>
                    </Card.Body>
                  </Card>


                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Eduction

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="plus" size="1x" />
                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <ul className=" p-0 m-0" style={{ listStyle: 'none' }} >
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between ">
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h6 className="">Post Graduation <sup>.</sup> Full time <sup>.</sup> 2021</h6>
                                  </div>
                                </div>
                                <div className="pe-5" >
                                  {/* <!-- <h1>icon</h1> --> */}
                                  <FontAwesome name="pencil" size="1x" />
                                </div>
                              </div>
                              <small>MSc.IT from Ruia College</small><br />
                              <small style={{ fontSize: '12px' }}>Marks / Grade: 9.21 CGPA</small>
                            </div>
                          </div>
                        </li>
                        <hr />
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between ">
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h6 className="">Post Graduation <sup>.</sup> Full time <sup>.</sup> 2021</h6>
                                  </div>
                                </div>

                                <div className="pe-5">
                                  {/* <!-- <h1>icon</h1> --> */}
                                  <FontAwesome name="pencil" size="1x" />
                                </div>
                              </div>
                              <small>MSc.IT from Ruia College</small><br />
                              <small style={{ fontSize: '12px' }}>Marks / Grade: 9.21 CGPA</small>
                            </div>

                          </div>
                        </li>
                      </ul>
                    </Card.Body>

                  </Card>
                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Projects


                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="plus" size="1x" />
                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <ul className=" p-0 m-0" style={{ listStyle: 'none' }} >
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between ">
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h5 className="">Magnet Cine agnet Cine agnet Cinema App
                                    </h5>
                                  </div>
                                </div>
                                <div className="pe-3">
                                  <FontAwesome name="pencil" size="1x" />                                          </div>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis
                                ultrices eu faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                                consectetur adipiscing elit. Imperdiet turpis ultrices eu faucibuseget nibh.
                              </p>

                            </div>
                          </div>
                        </li>
                        <hr />
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between ">
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h5 className="">Admin Dashboard
                                    </h5>

                                  </div>
                                </div>

                                <div className="pe-3">
                                  <FontAwesome name="pencil" size="1x" />                                       </div>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis
                                ultrices eu faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                                consectetur adipiscing elit. Imperdiet turpis ultrices eu faucibuseget nibh.
                              </p>
                            </div>

                          </div>
                        </li>
                      </ul>
                    </Card.Body>

                  </Card>


                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Certifications


                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="plus" size="1x" />                           </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <ul className=" p-0 m-0" style={{ listStyle: 'none' }} >
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between pt-2">
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h5 className="">Foundations of UI Design

                                    </h5>
                                  </div>
                                </div>
                                <div className="pe-3">
                                  <FontAwesome name="pencil" size="1x" />
                                </div>
                              </div>
                              <h6>institute: Coursera</h6>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis
                                ultrices eu faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                                consectetur adipiscing elit. Imperdiet turpis ultrices eu faucibuseget nibh.
                              </p>

                            </div>
                          </div>
                        </li>
                        <hr />
                        <li className="mb-2">
                          <div className="d-flex ms-3">
                            <div className="ms-3">
                              <div className=" d-flex align-items-center justify-content-between  " >
                                <div className="d-flex ">
                                  <div className=" me-3">
                                    <h5 className="">Foundations of UI Design

                                    </h5>

                                  </div>
                                </div>

                                <div className="pe-3">
                                  <FontAwesome name="pencil" size="1x" />
                                </div>
                              </div>
                              <h6>institute: Coursera</h6>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet turpis
                                ultrices eu faucibuseget nibh. Sagittis in donec porta sed nibh ut.
                                consectetur adipiscing elit. Imperdiet turpis ultrices eu faucibuseget nibh.
                              </p>
                            </div>

                          </div>
                        </li>
                      </ul>
                    </Card.Body>

                  </Card>

                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Social Links

                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="pencil" size="1x" />
                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <div className=" d-flex justify-content-evenly   pb-4  pt-3">
                        <div className="text-center">
                          <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                          <p style={{ fontSize: '10px' }}>Youtube</p>

                        </div>
                        <div className="text-center">
                          <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                          <p style={{ fontSize: '10px' }}>LinkedIn</p>

                        </div>
                        <div className="text-center">
                          <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                          <p style={{ fontSize: '10px' }}>Facebook</p>

                        </div>
                        <div className="text-center">
                          <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                          <p style={{ fontSize: '10px' }} >Instagram</p>

                        </div>
                        <div className="text-center">
                          <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                          <p style={{ fontSize: '10px' }} >Twitter</p>

                        </div>
                        <div className="text-center">
                          <img src={img1} alt="userimg" className="img-500  rounded-pill img-fluid" />
                          <p style={{ fontSize: '10px' }} >GitHub</p>

                        </div>




                      </div>
                    </Card.Body>
                  </Card>

                  <Card className=" mt-3">
                    <Card.Header className=" d-flex align-items-center justify-content-between ">
                      <div className="header-title mt-3">
                        <div className="d-flex ">
                          <div className=" me-3">
                            <p>Additional Information


                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <FontAwesome name="pencil" size="1x" />
                      </div>
                    </Card.Header>
                    <Card.Body className=" p-0">
                      <div className="d-flex justify-content-between p-3">
                        <div className="d-flex flex-column text-center">
                          <h6>Notice Period: Prefer not to say
                          </h6>
                          <h6>Marital Status: Unmarried
                          </h6>
                          <h6>DOB: 12-02 1998
                          </h6>

                        </div>
                        <div className="d-flex flex-column  text-center ">
                          <h6>Differently abled: Yes
                          </h6>
                          <h6>Gender: Female
                          </h6>
                          <h6>Languages: English | Hindi | Marathi
                          </h6>
                        </div>
                      </div>

                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col lg='3'>
                <Card className=" mb-3">
                  <Card.Body>
                    <div className="">
                      <h5>Review your public profile</h5>
                      <p>See how your profile is visible to other user.</p>
                    </div>

                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>
                    <div className="header-title">
                      <h4 className="card-title">Your Forums</h4>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <ul className=" m-0 p-0">
                      <li className="d-flex mb-2 align-items-center active">
                        <img src={img1} alt="story-img"
                          className="rounded-pill img-50  img-fluid" />
                        <div className="ms-3">
                          <p style={{ fontSize: '15px', fontWeight: "bold" }}>Accounting</p>
                          <small className="mb-0">8 Members</small>
                        </div>
                      </li>
                      <li className="d-flex mb-2 align-items-center">
                        <img src={img1} alt="story-img"
                          className="rounded-pill img-50  img-fluid" />
                        <div className="ms-3">
                          <p style={{ fontSize: '15px', fontWeight: "bold" }}>Advertisement</p>
                          <small className="mb-0">15 Members</small>
                        </div>
                      </li>
                      <li className="d-flex  mb-2  align-items-center">
                        <img src={img1} alt="story-img"
                          className="rounded-pill img-50  img-fluid" />
                        <div className="ms-3">
                          <p style={{ fontSize: '15px', fontWeight: "bold" }}>Administration</p>
                          <small className="mb-0">8 Members</small>
                        </div>
                      </li>
                      <li className="d-flex  mb-2  align-items-center">
                        <img src={img1} alt="story-img"
                          className="rounded-pill img-50  img-fluid" />
                        <div className="ms-3">
                          <p style={{ fontSize: '15px', fontWeight: "bold" }}>Animation</p>
                          <small className="mb-0">20 Members</small>
                        </div>
                      </li>
                      <li className="d-flex mb-2 align-items-center">
                        <img src={img1} alt="story-img"
                          className="rounded-pill img-50  img-fluid" />
                        <div className="ms-3">
                          <p style={{ fontSize: '15px', fontWeight: "bold" }}>Animation</p>
                          <small className="mb-0">50 Members</small>
                        </div>
                      </li>
                      <hr />
                      <li className="d-flex justify-content-center">
                        <div className="ms-3">
                          <p className='text-primary' style={{ fontSize: '15px', fontWeight: "bold" }}>Explore More
                          </p>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App