import { useState, useEffect, useCallback } from "react";

// custom hook umu tanımladım.
//Reactta Hooklara mutlaka use keywordu ile başlamalıdır. Yoksa çalışmaz.
// Apiden veri çekecek
//Parametre olarak url adresini alıcak.
export const useFetch = (url) => {
  // yükleniyor state için
  const [loading, setLoading] = useState(true);
  // Apiden gelen veri setini almak için
  const [shows, setShows] = useState([]);

  // fonksiyonu tanımlıyoruz.
  //burada useCallback kullanıyoruz bunu yapmazsak
  // sonsuz döngüye girecektir.

  // NOT bu kodu direkt useEffect içinde kullanıp fonksiyon yazılmayabilir. Başka örneklerde o şekilde görebilirisiniz.
  const getItem = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const shows = await data.hits;
    setShows(shows);
    setLoading(false);
  }, [url]);

  // sayfa ilk render olduğunda çalışması için ve verilerin gelmesi için useeffect kullanıyoruz.
  useEffect(() => {
    getItem();
  }, [url, getItem]);

  /* geriye tanımladığımız stateleri döndürüyoruz.*/
  return { loading, shows };
};
