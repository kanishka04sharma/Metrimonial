import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/dashboard.css';
import connect from '../assets/connect.png';
import interact from '../assets/interact.png';
import signup from '../assets/signup.png';


class Dashboard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const successStories = [
      {
        id: 1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr57YvyE2RgVY4sAqTuMipfQrq6AC1AOx6INuXwNQK2Q&s',
        name: "John Doe",
        story: "I found my perfect match on this website. We both are grateful to this platform for helping us find each other."
      },
      {
        id: 2,
        image:'https://www.classicmatrimonial.com/assets/success-story/d496fbf3db0e996cb4447daa60713f57.jpg',
        name: "Jane Smith",
        story: "I never thought I would find my soulmate online, but this website proved me wrong. Thank you!"
      },
      {
        id: 3,
        image: 'https://www.classicmatrimonial.com/assets/success-story/1599053677.jpg',
        name: "Alice Johnson",
        story: "We met on this website, and the rest is history. I can't imagine my life without him/her now."
      },
       {
        id: 4,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr57YvyE2RgVY4sAqTuMipfQrq6AC1AOx6INuXwNQK2Q&s',
        name: "John Doe",
        story: "I found my perfect match on this website. We both are grateful to this platform for helping us find each other."
      },
      {
        id: 5,
        image:'https://www.classicmatrimonial.com/assets/success-story/d496fbf3db0e996cb4447daa60713f57.jpg',
        name: "Jane Smith",
        story: "I never thought I would find my soulmate online, but this website proved me wrong. Thank you!"
      },
      {
        id: 6,
        image: 'https://www.classicmatrimonial.com/assets/success-story/1599053677.jpg',
        name: "Alice Johnson",
        story: "We met on this website, and the rest is history. I can't imagine my life without him/her now."
      },

    ];

    return (
      <div className='container'>
        <div className="dash">
          <div>
            <img style={{ height: '50px' }} src="https://img2.shaadi.com/assests/2016/images/home-logo.png" alt="logo" />
          </div>
          <div>
            <button className="btn1 bm"><Link to='/'>help</Link></button>
            <button className="btn2 bm"><Link to='/login'>Login</Link></button>
          </div>
          <div className='row'>
            <h1 className="text">To search your perfect partner</h1>
            <h3 className="subtext">with using your mobile only one click</h3>
          </div>
          <div>
            <button className="bt"><Link to='/register'>Let's Begin</Link></button>
          </div>
        </div>

        <div className='section2'>
          <div>
            <h1 className="tx">Find Your Someone Special</h1>
          </div>
          <div className='section21'>
            <div className='fixing'>
              <span className='fixing1'>
                <Link to='/register'><img className="icon2" width="100px" height="100px" src={signup} alt='signup' /></Link>
                <Link to='/login'><img className="icon2" width="90px" height="100px" src={connect} alt='connect' /></Link>
                <img className="icon2" width="100px" height="100px" src={interact} alt='interact' />
              </span>
            </div>
            <div className='section-1'>
              <span className='fixing2'>
                <h3 className="icon1">Signup</h3>
                <h3 className="icon1">connect</h3>
                <h3 className="icon1">interact</h3>
              </span>
            </div>
          </div>
        </div>

 <div className='stories'>
          <h1>Success Stories</h1>
          <Slider {...settings}>
            {successStories.slice(0, 3).map(story => (
              <div key={story.id} className="story">
                <img src={story.image} alt={story.name} />
                <p className="user-name">{story.name}</p>
                <p className="user-story">{story.story}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Dashboard;
