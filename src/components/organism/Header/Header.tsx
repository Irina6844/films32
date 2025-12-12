import { useEffect } from "react";
import { getGenresThunk } from "../../../store/slices/genresSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isPending, genres } = useAppSelector((state) => state.genresData);
console.log(isPending, genres);

  useEffect(() => {
    dispatch(getGenresThunk());
  }, []);

  return (
    <div>
      <h1>Filmp API</h1>
      <nav></nav>
    </div>
  );
};

export default Header;
