import React from "react";
import Card from "./Card";
const Grid = () => {
  return (
    <div className="Grid">
      <table>
        <tbody>
          <tr>
            <Card
              img="/images/elfaro.jpeg"
              name="El Faro"
              alt="El Faro La Villita"
              description="Local Mexican Restaurant on 3936 W 31st St, Chicago, IL 60623."
            />
            <Card
              img="/images/little-village-arch.jpg"
              name="Little Village Arch"
              alt="Little Village Arch"
              description="Archway that welcomes people to La Villita. Located on West 26th Street &, S Troy St, Chicago, IL."
            />
            <Card
              img="/images/Manuel PerezMemorialPlaza.webp"
              name="Manuel Perez Memorial Plaza"
              alt="Manuel Perez Memorial Plaza La Villita"
              description="A plaza that hosts many events throughout the year and serves as a memorial for Manuel Perez. Located on 4345 W 26th St, Chicago, IL 60623."
            />
          </tr>
          <tr>
            <Card
              img="/images/LaCatedralCafe.jpeg"
              name="La Catedral Cafe"
              alt="La Catedral Cafe"
              description="Mexican cafe serving up a Guadalajara-inspired menu. Located on 2500 S. Christiana Ave. Chicago, IL 60623."
            />
            <Card
              img="/images/Dulcelandia.jpg"
              name="Dulcelandia"
              atl="Dulcelandia La Villita"
              description="Candy store selling classic Mexican candies. Located on 3253 W 26th St, Chicago, IL 60623."
            />
            <Card
              img="/images/DiscountMall.jpeg"
              name="Discount Mall"
              alt="Discount Mall La Villita"
              description="Mexican mall comprised of many small vendors. Located on 3115 W 26th St, Chicago, IL 60623."
            />
          </tr>
          <tr>
            <Card
              img="/images/LaChiquita.jpg"
              name="La Chiquita"
              alt="La Chiquita Mexican Grocery Store"
              description="Mexican Grocery Store. Located on 2637 S Pulaski Rd, Chicago, IL 60623."
            />
            <Card
              img="/images/PiotrowskiPark.jpg"
              name="Piotrowski Park"
              alt="Piotrowsk Park"
              description="Local Park. Located on 4247 W 31st St, Chicago, IL 60623."
            />
            <Card
              img="/images/VillitaPark.webp"
              name="La Villita Park"
              alt="La Villita Park"
              description="Community park built on remediated land. Located on  2800 S Sacramento Ave, Chicago, IL 60608."
            />
          </tr>
          <tr className="last-row">
            <Card
              img="./images/SemillasdeJusticiaCommunityGarden.jpg"
              name="Semillas de Justicia Community Garden"
              alt="Semillas de Justicia Community Garden"
              description="Community garden focused on sustainability and food justice. Located on 2727 S Troy St, Chicago, IL 60623."
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Grid;
