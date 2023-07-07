import React, { createContext, useEffect, useState } from "react";
import Animal1 from "./Imagen1.jpg";
import { Pagination } from "react-bootstrap";

const ParkContext = createContext();

const defaultAreas = [
  {
    areaName: "Todas las areas",
    img: Animal1,
  },
  {
    areaName: "Acuario",
    img: Animal1,
  },
  {
    areaName: "Segunda",
    img: Animal1,
  },
  {
    areaName: "Tercera",
    img: Animal1,
  },
];

const defaultAnimals = [
  {
    nameAnimal: "ceboshita",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "jandrita",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "jandrita",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },{
    nameAnimal: "chiquitin",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "jandrita",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "leonsisho",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "leonsisho",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "quesito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "gatisho",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "quesito",
    area: "Acuario",
    img: Animal1,
  },{
    nameAnimal: "Pepito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "gatisho",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "quesito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "tomatito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },{
    nameAnimal: "Pepito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "tomatito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "pavito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "pavito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },{
    nameAnimal: "chiquitin",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
    img: Animal1,
  },
  {
    nameAnimal: "tigrito",
    area: "Acuario",
    img: Animal1,
  },
  {
    nameAnimal: "patito",
    area: "Segunda",
    img: Animal1,
  },
  {
    nameAnimal: "juanito",
    area: "Tercera",
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
  const [filteredAnimals, setFilteredAnimals] = useState(animals)
  const [currentAnimals, setCurrentAnimals] = useState(filteredAnimals);
  const [currentPage, setCurrentPage] = useState(1);
  const [background, setBackground] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPagination, setItemsPagination] = useState()

  const filterAnimals = (areaName) => {
    if(areaName !== 'Todas las areas') {
      const copyAnimals = animals.filter(animal => animal.area === areaName);
      setFilteredAnimals(copyAnimals)
    } else {
      setFilteredAnimals(animals)
    }
    setCurrentPage(1)
  }

  const animalsByPage = 9;
  const totalPages = Math.ceil(filteredAnimals.length / animalsByPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * animalsByPage;
    const endIndex = startIndex + animalsByPage;
    const currentAnimals = filteredAnimals.slice(startIndex, endIndex);
    setCurrentAnimals(currentAnimals);

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
    setItemsPagination(items)
  }, [currentPage, filteredAnimals, totalPages]);

 


  return (
    <>
      <ParkContext.Provider
        value={{
          animals,
          filteredAnimals,
          currentAnimals,
          background,
          setBackground,
          isHovered,
          setIsHovered,
          defaultAreas,
          filterAnimals,
          setCurrentPage,
          currentPage,
          totalPages,
          itemsPagination,
        }}
      >
        {props.children}
      </ParkContext.Provider>
    </>
  );
};

export { ParkProvider, ParkContext };
