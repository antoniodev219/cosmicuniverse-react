import img from '../assets/img/about_img.png'

const About = () => {
    return (
        <section className="about_us_area section_gap_top">
            <div className="container">
                <div className="row about_content align-items-center">
                    <div className="col-lg-6">
                        <div className="section_content">
                            <h6>About Us</h6>
                            <h1>We Believe that <br/>Interior beauty Lasts Long </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="primary_btn" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about_us_image_box justify-content-center">
                            <img className="img-fluid w-100" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;