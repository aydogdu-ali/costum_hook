import { useState, useEffect, useCallback } from "react";


export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);

  const getItem = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const shows = await data.hits
    setShows(shows);
    setLoading(false);
  }, [url]);





  useEffect(() => {
    getItem();

    return ()=>{getItem()}
  }, [url, getItem]);

  return { loading, shows };
};
