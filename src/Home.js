import React from 'react';
import './Home.css';
import Product from './Product';
function Home () {
  return (
    <div className='home'>
        <img 
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
        />
        <div className="home__row">
        <Product 
        id="1"
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
        price={11.96}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product 
        id="2"
        title="RC Robot"
        price={23.96}
        rating={4}
        image="https://www.truetop5review.com/wp-content/uploads/2020/04/1-31.jpg"
        />
        </div>
        <div className="home__row">
        <Product 
        id="3"
        title="Premier League Official Football"
        price={12.5}
        rating={5}
        image="https://th.bing.com/th/id/OIP.ozdDL1lx5ZK_kiacAmwUbAHaHa?pid=ImgDet&rs=1"
        />
        <Product 
        id="4"
        title="Sony Wireless Headphones"
        price={299}
        rating={5}
        image="https://www.bhphotovideo.com/images/images2500x2500/sony_mdr_rf995rk_rf995rk_wireless_home_theater_1317729.jpg"
        />
        <Product 
        id="5"
        title="Premium Juicer"
        price={11.96}
        rating={5}
        image="https://th.bing.com/th/id/OIP.25udjv2d9-XiYBPddgrdkwHaID?pid=ImgDet&rs=1"
        />
        </div>

        <div className="home__row">
        <Product 
        id="6"
        title="Sony Bravia LED"
        price={1299}
        rating={4}
        image="https://brain-images-ssl.cdn.dixons.com/3/2/10159823/u_10159823.jpg"
        />
        </div>

    </div>
  )
}

export default Home;