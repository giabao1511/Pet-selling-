import DogsCard from "./DogsCard";
import "./dogs.css";

const DogPages = (props) => {
  const { allDogs } = props;
  
  return (
    <section className="dogs-container">
      {allDogs.map((dog) => (
        <div key={dog.id}>
          <DogsCard
            name={dog.name}
            imageUrl={dog.imageUrl}
            desc={dog.description}
            breed={dog.breed}
            price={dog.price}
          />
        </div>
      ))}
    </section>
  );
};

export default DogPages;
