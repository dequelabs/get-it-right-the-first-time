import pizza from '../assets/images/pizza.jpg';
import soda from '../assets/images/soda.jpg';
import pizzaBagel from '../assets/images/pizza-bagel.jpg';

const popularItems = [
  {
    id: 1,
    name: 'Army Meal',
    description: 'Enough food to feed a small army',
    coverImage: pizza,
    price: 200,
  },
  {
    id: 2,
    name: 'Pizza and Soda',
    description: 'Because you need something to wash it down',
    coverImage: soda,
    price: 15,
  },
  {
    id: 3,
    name: 'Pizza on a Bagel',
    description: 'Combining two great tastes',
    coverImage: pizzaBagel,
    price: 10,
  },
];

const Order = () => {
  return (
    <div class="order">
      <div class="heading">What's Popular</div>
      <ul>
        {popularItems.map(({ id, name, description, coverImage, price }) => (
          <li key={id} class="card">
            <span class="price" id={`price-${id}`}>
              ${price}
            </span>
            <div class="cover">
              <img src={coverImage} alt="" />
            </div>
            <button aria-describedby={`price-${id}`} tabIndex={1}>
              <dl>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </dl>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
