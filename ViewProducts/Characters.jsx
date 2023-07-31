import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
//EXAMPLE:

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);
  //se ha montado el componente
  useEffect(() => {
    getCharacters();
  }, []);

  const character = characters.map(
    (
      character //without {} in an automatic return
    ) => (
      <div key={character.id}>
        <p>{character.name}</p>
      </div>
    )
  );
  return <div>{character}</div>;
};

export default Characters;
