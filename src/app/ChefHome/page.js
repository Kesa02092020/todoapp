"use client";
import Image from 'next/image'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Header from "../Components/Header/page"
import PickupToggle from "../Components/PickupToggle/page"
import SelectDate from "../Components/SelectDate/page"
import Filters from "../Components/Filters/page"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/page';

export default function Chefhome() {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToShow: 1,
    swipeToSlide: true,
    variableWidth: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  const popularChefSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const promotionSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <main>
        <Header />
        <Container className='items-page'>
          <Row>
            <Col>
              <div className='mb-3'>
                <PickupToggle />
              </div>

              <div className='ip-date'>
                <SelectDate />
              </div>


              <Slider {...settings} className="ei-container mb-4">
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
                <div>
                  <div className='ei-item d-flex align-items-center justify-content-center flex-column'>
                    <Image src="/images/sample-img1.png" alt='Icon' width={57} height={57} className='mb-2' />
                    <h6 className='text-center'>Indian</h6>
                  </div>
                </div>
              </Slider>
              <div className='ip-filter'>
                <Filters />
              </div>

              <div className='card_list_slider'>
                <h3 className='mb-3 fw-bold'>Popular chefs</h3>
                <Slider {...popularChefSettings} className="mb-4">
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Slider>
              </div>

              <section className='offer_banner d-flex align-items-center justify-content-between p-4'>
                <div>
                  <h4 className='mb-1 fw-bold'>Give $20, Get $10</h4>
                  <div className='d-flex align-items-center'>
                    Learn more
                    <Image src="/images/right_angle_white.svg" alt='Icon' width={8} height={8} />
                  </div>
                </div>
                <div>
                  <Image src="/images/discount.svg" alt='Icon' width={56} height={56} />
                </div>
              </section>
              <div className='card_list_slider promotion-slider'>
                <h3 className='mb-1 fw-bold'>Bigger portions, better savings!</h3>
                <p className='mb-4 chef_promp_text'>These shefs let you pick your perfect portion size & save on select dishes</p>
                <Slider {...promotionSettings} className="mb-4">
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='pb-3 pe-3'>
                    <Card className='border-0'>
                      <Card.Img variant="top" src="/images/foodsample2.png" />
                      <Card.Body className='d-flex'>
                        <div className='chef_dtls'>
                          <Card.Title className='fw-bold mb-1 text-capitalize'>Chef Priya N.</Card.Title>
                          <Card.Text className="text-capitalize"> South Indian • Tamil Nadu</Card.Text>
                          <div className='chef_rating d-inline-flex align-items-center'>
                            <Image src="/images/black_star.svg" alt='Icon' width={8} height={8} className='rounded-circle' />
                            4.2 (2K)
                          </div>
                        </div>
                        <div className='chef_img'>
                          <Image src="/images/chefImg.png" alt='Icon' width={53} height={53} className='rounded-circle' />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Slider>
              </div>

              <div className='d-flex justify-content-center'>
                <Button variant="outline-primary cuisines_btn text-capitalize">See All Cuisines</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}