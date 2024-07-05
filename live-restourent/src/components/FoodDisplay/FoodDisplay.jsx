// import React, { useContext } from 'react'
// import './FoodDisplay.css'
//  import { StoreContext } from '../../StoreContext/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';


// const FoodDisplay = ({category}) => {
//   const {food_list} = useContext( StoreContext);

  

//     return (

//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near your</h2>
//       <div className="food-display-list">
//         {food_list.map((item,index)=>{
//           console.log(category,item.category);
//             if(category ==="All" || category===item.category )
//             {
//                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
//             }
            

//             return null;
//         })}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../StoreContext/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        <h3>All Food Items</h3>
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
        <h3>Filtered Food Items for Category: {category}</h3>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
