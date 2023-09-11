import CardsContainer from "../../components/Cards/CardsContainer"
import Pagination from "../../components/Pagination/Pagination"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDogs } from "../../redux/actions"
const Home = ( )=>{
    const dispatch = useDispatch()
    const dogs = useSelector((state) => state.dogs);
    useEffect(()=>{
        dispatch(getDogs())
    }, [dispatch])

    const cardsPerPage = 10; // Número de tarjetas por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice de inicio y fin de las tarjetas en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dogs.slice(indexOfFirstCard, indexOfLastCard);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
        <h1>DOGS</h1>
        <CardsContainer cards={currentCards}/>
        <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={dogs.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default Home