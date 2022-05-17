import { GetServerSideProps } from 'next';
import React from 'react';
import { Character, GetCharacterResult } from '../../types';



const CharacterPage = ({ character }: { character: Character }) => {
    return (
        <div>{character.name}</div>
    )
}




export const getServerSideProps: GetServerSideProps = async (context) => {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
    const character = await res.json();

    return {
        props: {
            character
        }
    }
}

export default CharacterPage;