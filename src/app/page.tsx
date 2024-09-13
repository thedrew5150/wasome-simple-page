import { FC } from 'react';
import Image from 'next/image';
import styles from './globals.css';

const Home: FC = () => (
  <div className="container">
    <div className='hero-image'>
      <Image 
        src="https://res.cloudinary.com/dapcfomc4/image/upload/q_auto,f_auto/w_400/WASOME_TEXT_final_white_qt7rux.ai" 
        alt="Company Logo" 
        className="logo" 
        width={400}
        height={100}
      />
    </div>
    <div>
      <h1>WASOME Digital</h1>
      <h2>Digital agency focused on improving your funnel through AI and immersive experiences</h2>
      <p>The team at WASOME Digital has worked with the largest brands in the world to help with digital transformations.</p>
      <p>We are a team of developers, designers, and marketers who are passionate about helping businesses succeed in the digital age.</p>
      <p>We are "doers" with the knowledge and experience to drive engagement and conversion at every step of your customer journey.</p>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default Home;