import React from 'react';
import { Character, GetCharacterResult } from '../../types';



const CharacterPage = ({ character }: { character: Character }) => {
    return (
        <div>{character.name}</div>
    )
}



export async function getStaticPaths() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results }: GetCharacterResult = await res.json();


    return {
        paths: results.map((character) => {
            return {
                params: { id: String(character.id) }
            }
        }),
        fallback: false,
    }
}



export async function getStaticProps({ params }: { params: { id: string } }) {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);


    const character = await res.json();

    console.log(character, "---");

    return {
        props: {
            character
        }
    }
}


export default CharacterPage;