import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debounce, setDebounce] = useState(term);
  const [results, setResults] = useState([]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(term);
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: debounce
        }
      });
      setResults(data.query.search);
    }

    if (debounce) {
      search();
    }


  }, [debounce]);



  const renderResults = results.map((item) => {
    return <div className="list-group border p-2 my-2" key={item.pageid}>
      <h5>{item.title}</h5>
      <div className="d-flex">
        <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
        <span className="p-2">
          <a href={`https://en.wikipedia.org?curid=${item.pageid}`} target="_blank" rel="noreferrer">
            <button className="btn btn-warning btn-lg">Go</button>
          </a>
        </span>
      </div>

    </div>
  });

  return (
    <div className="container">
      <h1>Search</h1>
      <form >
        <input
          onChange={(e) => setTerm(e.target.value)}
          type="search" className="form-control" placeholder="search" value={term} required />
      </form>

      {renderResults}

    </div>
  )
}

export default Search
