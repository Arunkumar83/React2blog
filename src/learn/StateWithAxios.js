import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

function StateFetchData() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://hn.algolia.com/api/v1/search?query=${search}`
        );
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchdata();
    // const result = await axios(
    //   "https://hn.algolia.com/api/v1/search?query=redux"
    // );
    // setData(result.data);
  }, [search]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        {" "}
        Search{" "}
      </button>
      {isError && <div> Something went wrong ...</div>}
      {isLoading ? (
        <div> Loading ... </div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default StateFetchData;
