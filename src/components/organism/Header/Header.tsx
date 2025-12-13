import { useEffect } from "react";
import { getGenresThunk } from "../../../store/slices/genresSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Button, Box, Typography } from "@mui/material";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isPending, genres } = useAppSelector((state) => state.genresData);

  useEffect(() => {
    dispatch(getGenresThunk());
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#1d2b4dff",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          marginBottom: "12px",
          transition: "all 0.5s",
          "&:hover": { transform: "scale(1.2)" },
        }}
      >
        Film API
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {genres.map((genre) => (
          <Button
            key={genre.id}
            variant="outlined"
            className="genersButton"
            sx={{
              borderColor: "#1976d2",
              color: "#fff",
              borderRadius: "0 30px 0 30px",
              textTransform: "capitalize",
              transition: "all 0.3s ease",
              padding: "6px 14px",
              fontWeight: "700",
              fontSize: "20px",

              "&:hover": {
                backgroundColor: "#1976d2",
                color: "#fff",
                borderColor: "#1976d2",
                fontWeight: "700",
              },
            }}
          >
            {genre.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
