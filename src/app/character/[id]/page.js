 'use client'
import CharacterDetails from '@/components/CharacterDetails/CharacterDetails'
import { use } from 'react';

export default function Character({ params }) {
  const { id } = use(params);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-24 py-4 bg-slate-800">
      <h1 className='font-bold text-4xl mb-8 text-white'>Character {id}</h1>
      <CharacterDetails id={id}/>
    </main>
  )
}