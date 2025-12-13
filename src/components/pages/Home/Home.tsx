import React, { useEffect } from "react";
import { getFilmsListThunk } from "../../../store/slices/filmSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Box, Typography } from "@mui/material";


const imgUrl = "https://image.tmdb.org/t/p/w500/"
const Home = () => {
  const { films } = useAppSelector((state) => state.filmsData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmsListThunk());
  }, []);


  return (
    <Box>
      {films.map((film) => {
        return (
          <Box>
            <Typography variant="h4">{film.title}</Typography>
            <img src={imgUrl + film.poster_path}/>
          </Box>
        );
      })}
    </Box>
  );
};

export default Home;
