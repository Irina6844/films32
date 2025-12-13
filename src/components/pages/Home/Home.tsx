import { useEffect } from "react";
import { getFilmsListThunk } from "../../../store/slices/filmSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Box, Typography } from "@mui/material";

const imgUrl = "https://image.tmdb.org/t/p/w400/";
const Home = () => {
  const { films } = useAppSelector((state) => state.filmsData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmsListThunk());
  }, []);

  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        gap: "15px",
        flexWrap: "wrap",
        mt: "20px",
      }}
    >
      {films.map((film) => {
        return (
          <Box
            sx={{
              border: "3px solid #263a69ff",
              padding: "10px 20px",
              textAlign: "center",
              borderRadius: "30px",
              maxWidth: "400px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              transition: "all 0.5s",

              "&:hover": {
                transform: "translateY(-10px)",

                "& img": {
                  transform: "scale(1.07)",
                },
              },
            }}
          >
            <Typography variant="h4">{film.title}</Typography>
            <img
              src={imgUrl + film.poster_path}
              style={{ borderRadius: "30px", transition: "all 0.5s" }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Home;
