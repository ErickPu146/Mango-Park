import { useContext } from "react";
import { ParkContext } from "../../context";

const Tienda = () => {
  const { background } = useContext(ParkContext);

  return (
    <>
      <main className={`${background ? "bg-dark" : "bg-light"}`}>
        
      </main>
    </>
  );
};

export { Tienda };
