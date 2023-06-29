import React, { createContext, useEffect, useState } from "react";
import Animal1 from "./Imagen1.jpg";
import { Pagination } from "react-bootstrap";

const ParkContext = createContext();

const defaultAreas = [
  {
    nameArea: "Todas las areas",
    img: Animal1,
  },
  {
    nameArea: "Acuario",
    img: Animal1,
  },
  {
    nameArea: "segunda",
    img: Animal1,
  },
  {
    nameArea: "Tercera",
    img: Animal1,
  },
];

const defaultAnimals = [
  {
    nameAnimal: "Pepito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
];


const ParkProvider = (props) => {

  const [animals] = useState(defaultAnimals);
  const [currentAnimals, setCurrentAnimals] = useState(animals);
  const [currentPage, setCurrentPage] = useState(1);
  const [background, setBackground] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const animalsByPage = 9;

  const totalPages = Math.ceil(animals.length / animalsByPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * animalsByPage;
    const endIndex = startIndex + animalsByPage;
    const currentAnimals = animals.slice(startIndex, endIndex);
    setCurrentAnimals(currentAnimals);
  }, [currentPage, animals]);

  let items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <ParkContext.Provider
        value={{
          animals,
          currentAnimals,
          background,
          setBackground,
          isHovered,
          setIsHovered,
          defaultAnimals,
          defaultAreas,
          setCurrentPage,
          currentPage,
          totalPages,
          items,
        }}
      >
        {props.children}
      </ParkContext.Provider>
    </>
  );
};

export { ParkProvider, ParkContext };
