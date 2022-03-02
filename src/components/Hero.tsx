import heroImage from '../assets/images/drone.jpg';

const Hero = () => {
  return (
    <aside class="hero" aria-label="Steps to Pizza">
      <ol>
        <li>Place Your Order</li>
        <li>Wait Outside</li>
        <li>Delivery by drone in 10 minutes or less</li>
      </ol>
      <img src={heroImage} alt="" />
      <p>Where Pizza is a Pie in the Sky</p>
    </aside>
  );
};

export default Hero;
