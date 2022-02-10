import axios from "axios";

export const searchRequest = async (search) => {
  // Intenté usar la api de deezer y me salia cors error
  //   const res = await axios.get(`https://api.deezer.com/search?q=${search}`);
  //   return res.data;

  // ACA USÉ RAPIDAPI
  const res = await axios.get(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,
    {
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "192c461946msh495ef167ef71936p125a48jsn45141c3f8156",
      },
    }
  );
  return res.data;
};
