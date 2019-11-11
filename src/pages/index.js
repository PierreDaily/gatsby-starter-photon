import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Innvo HR";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Why us ?</h2>
                            </header>
                            <p>First of all, congratulation to your success that you finally made your business grown up to a team.  To devote your time 100% to your own business, it is essential to have someone clear your in-tray and solve the HR matters for you.  Here are the reasons why you need our help.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            {/* <header className="major"> */}
                                <h3>Cost saving</h3>
                            {/* </header> */}
                            <p>You will probably save HK$18K – HK$48K for outsourcing HR-related matters instead of hiring an HR professional or HR Manager.</p>
                                <h3>Time saving</h3>
                                <p>Do you know how much time you will engage in monthly payroll, managing leave record, maintenance of personal files, regular filing to different government departments, etc.  It could take ages to complete.  Instead of costing HK$10-15K to let other people to do, why not leave those dirty works to us at a much lower cost ?</p>
                                <h3>Too busy to keep up with newest regulations ?</h3>
                                <p>We always make sure there is no chance you will breach the law and facing lawsuit by employees. We’ll keep watching out for your company and be your moat to keep away from any legal issues.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>What we do ?</h2>
                            </header>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Recruitment {'&'} Selection</h3>
                            <ul className="actions">
                                <li>Visa Application Services</li>
                                <li>Screen resumes</li>
                                <li>Reference check</li>
                                <li>Select candidates for the first interview</li>
                                <li>Conduct first interview</li>
                                <li>Arrange second interview for clients</li>
                                <li>Preparation of employment contract</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Payroll Management Services</h3>
                            <ul className="actions">
                                <li>Calculate monthly payrols</li>
                                <li>Arrange salary payments</li>
                                <li>Prepare pay slips</li>
                                <li>Setup salary auto-pay accounts</li>
                                <li>Process monthly MPF subscription and management</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Visa Application Services</h3>
                            <ul className="actions">
                                <li>Proceed work visa application for main applicant</li>
                                <li>Initial review of applicant's profile</li>
                            </ul>
                        </div>

                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;