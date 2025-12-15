import { useEffect } from "react";
import { changePage, getFilmsListThunk } from "../../../store/slices/filmSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Box, Pagination, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w300/";
const Home = () => {
  const { films, page, totalPages } = useAppSelector(
    (state) => state.filmsData
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmsListThunk(page));
  }, [page, dispatch]);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          onChange={(_, value) => dispatch(changePage(value))}
          count={totalPages}
          page={page}
          variant="outlined"
          color="secondary"
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Box>
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
                maxWidth: "300px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                transition: "all 0.5s",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              <Box>
                <NavLink
                  to={`/film/${film.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography variant="h5">{film.title}</Typography>

                  <img
                    src={imgUrl + film.poster_path}
                    style={{ borderRadius: "30px", transition: "all 0.5s" }}
                  />
                </NavLink>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          onChange={(_, value) => dispatch(changePage(value))}
          count={totalPages}
          page={page}
          variant="outlined"
          color="secondary"
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
};

export default Home;
