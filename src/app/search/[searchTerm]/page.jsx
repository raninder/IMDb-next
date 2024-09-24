import Results from '@/components/Results';
import React from 'react'

export default async function searchPage({params}) {
    const searchTerm = params.searchTerm 
    console.log("term",searchTerm)
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
      );
    const data = await res.json();
    const results = data.results;
  return (
    <div>
       
      {results && <Results results={results} />  }
      
    </div>
  )
}
