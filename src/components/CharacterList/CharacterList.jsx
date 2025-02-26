/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'

export default function CharacterList() {
  const [data, setData] = useState([])
  const [seach, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((Response) => Response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error))
  }, [])

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(seach.toLowerCase())
  )

  return (
    <>
      <h1 className='font-bold text-4xl mb-8'>Rick And Morty Characters</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 px-4 rounded-xl text-zinc-400 font-bold w-60"
        placeholder="Pesquise um personagem"
      />
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {filteredData
          .map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
    </>
  )
}