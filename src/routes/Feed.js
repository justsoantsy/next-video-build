import React from 'react'
import styles from './Feed.css'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import Post from '../components/feed/Posts'


import Profile from '../assets/feed/profile.png'
import Write from '../assets/feed/Write.png'
import Burger from '../assets/feed/Burger.png'
import Star from '../assets/feed/Star.svg'
// import Settings from '../assets/feed/settings.png'
// import BetaCup from '../assets/feed/BetaCup.png'
import Settings from '../assets/feed/Slider.svg'
import BetaCup from '../assets/feed/bottle.svg'
import ArrowRight from '../assets/feed/Arrow right.svg'
import Stream from '../assets/feed/streampurple.svg'
import Location from '../assets/feed/Location.svg'
import CreatePost from '../components/feed/CreatePost'
import { useState } from 'react'

export default function Feed() {
    const [show, setShow] = useState(false)
    
    const handleShow = () => {
        setShow(!show)
    }
    return (
    <div className={styles.build}>
        <Navbar />
            <div className={styles.contain}>
                <div className={styles.container}>
                    <div className={styles.container1}>
                        <div className={styles.search}>
                            <div className={styles.imgIn}>
                                <img src={Profile} alt='profile' width={40} height={40} />
                                <input type='create-post' placeholder="What’s the tea?" className={styles.input} />
                            </div>
                            <img src={Write} alt='Edit' width={23} height={23} onClick={handleShow}/>
                        </div>
                        {show ?   <CreatePost /> : null}
                        <div className={styles.widget}>
                            <div className={styles.widget1}>
                                <button className={styles.button1}>
                                    <img src={Burger} alt='hamburger' height={25} width={25} />
                                    <h3>Timeline</h3>
                                </button>
                                <button className={styles.button2}>
                                    <img src={Star} alt='star' height={23} width={23} />
                                    <h3>Highlights</h3>
                                </button>
                            </div>
                            <img src={Settings} alt='settings' height={25} width={25} />
                        </div>
                        <Post />
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.card1}>
                            <h2>
                                <img src={BetaCup} alt='' width={20} height={25} className={styles.streamImg}/>
                                Beta warning!</h2>
                            <p>The dragverse is still in the beta phase, things may break, please be patience as we build the best drag social network.</p>
                        </div>

                        <h3>START HERE</h3>

                        <div className={styles.card2}>
                            <h2>
                                <img src={Stream} alt='' width={30} height={20} />
                                GO LIVE</h2>
                            <p>Ready to share your drag magic with the world? Star livestreaming now! 💄</p>
                            <button>GO LIVE
                                <img src={ArrowRight} alt='' height={24} width={24}/>
                            </button>
                        </div>

                        <div className={styles.card3}>
                            <h2>
                                <img src={Location} alt='' width={30} height={20} />
                                VISIT DRAGVERSE</h2>
                            <button>EXPLORE OUR SPATIAL SPACE
                                <img src={ArrowRight} alt='' height={24} width={24}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />           
        </div>

  )
}