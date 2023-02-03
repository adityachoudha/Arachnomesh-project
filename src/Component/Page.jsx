import { useEffect } from 'react';
import '../App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';

export default function Page() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='page'>
            <div className="secone">
                <div className="seconecontent">
                    <img src="./cap.png" alt="cap" className='cap' />
                    <div className="circle"></div>
                    <div className='text'>
                        <h3>self Cleaning bottle</h3>
                        <h3>In 60 Secounds</h3>
                        <p>Hit refresh with the intelligently clean bottel builf for advanture.</p>
                        <button className='btn'>KNOW MORE</button>
                    </div>
                    <img src="./bottal.png" alt="bottel" className='bottel' />
                </div>
            </div>
            <div className="sectwo" data-aos="fade-up">
                <div className="sectwocontent">
                    <img src="./bot.png" alt="" className='bot bot-down' />
                    <div data-aos="fade-down">
                        <img src="./bot.png" className='bot bot-up' />
                    </div>
                    <div data-aos="fade-up">
                        <img src="./bot.png" className='bot bot-down' />
                    </div>
                    <div data-aos="fade-down">
                        <img src="./bot.png" className='bot bot-up' />
                    </div>
                    <div className='sectwotext'>
                        <h1>A smart</h1>
                        <h1>way to sip</h1>
                    </div>
                </div>
            </div>
            <hr />
            <div className="secthree">
                <div className="three">
                    <div className="a">
                        <div className="aa">
                            <h3>Our Work_</h3>
                        </div>
                        <div className="aaa">
                            <section>
                                <img src="./01.png" />
                            </section>
                            <section>
                                <img src="./02.png" />
                            </section>
                            <section>
                                <img src="./03.png" />
                            </section>
                            <section>
                                <img src="./04.png" />
                            </section>
                        </div>
                    </div>
                    <div className="b">
                        <section>
                            <img src="./img.png" />
                            <img src="./sec3-2.png" />
                            <img src="./sec3-3.png" />
                            <img src="./sec3-4.png" />
                            <img src="./sec3-5.png" />
                            <img src="./sec3-6.png" />
                        </section>
                    </div>
                </div>
            </div>
            <div className="secfour">
                <div className="testimonial">
                    <div className='cc'>
                        <div className="cir1"></div>
                        <div className="cir2"></div>
                        <div className="cir3"></div>
                        <div className="cir4"></div>
                    </div>
                    <div className="testcontent">
                        <div className="t">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="footer waveWrapper waveAnimation">
                    <div clasName="footer1 bgTop waveWrapper waveWrapperInner">
                        <div className="wave waveTop">
                            <div className="content">
                                <ul>
                                    <li><b>Help</b></li>
                                    <li>FAQ</li>
                                    <li>Review</li>
                                    <li>My Account</li>
                                    <li>Corporate</li>
                                    <li>Contact Us</li>
                                </ul>
                                <ul>
                                    <li><b>Shop</b></li>
                                    <li>PureV</li>
                                    <li>Gifts</li>
                                    <li>Travel set</li>
                                    <li>Accesories</li>
                                </ul>
                                <ul>
                                    <li><b>About</b></li>
                                    <li>Magazine</li>
                                    <li>Press</li>
                                    <li>Our Story</li>
                                    <li>Tech</li>
                                </ul>
                                <ul>
                                    <li><b>Sign up for the newsletter</b><br /></li>
                                    <li><input type="search" placeholder="Enter your email" /></li>
                                </ul>
                            </div>
                            <div className='contentfooter'>
                                <div>
                                <p>Copyright Arachnomesh 2022</p>
                                </div>
                                <div>
                                <img src="instagram.png"/>
                                <img src="facebook.png"/>
                                <img src="linkedin.png"/>
                                <img src="twitter.png"/>
                                </div>
                                <div>
                                <p>T&C</p></div>
                                <div>
                                <p>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer2 bgMiddle waveWrapperInner">
                        <div className="wave waveMiddle"></div>
                    </div>
                    <div className="footer3 bgBottom waveWrapperInner">
                        <div className="wave waveBottom"></div>
                    </div>
                </div>


                {/* <div className="footer5 bgMiddle waveWrapperInner">
                        <div className="wave waveMiddle">
                            <div>
                                
                            </div>
                            <div>
                                <img src="./bottal.png" />
                            </div>
                            <div>
                                <p>T&C</p>
                            </div>
                            <div>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                    <div className="foot3 bgBottom waveWrapperInner">
                        <div className="wave waveBottom"></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}