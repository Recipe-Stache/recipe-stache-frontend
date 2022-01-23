import { FC } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//FUTURE: Replace with useful navigation
const Navigation: FC = () => {
  return (
    <>
      <Link to="/">
        <Button>Recipes</Button>
      </Link>
      <Link to="/create">
        <Button>Create</Button>
      </Link>
    </>
  );
};

export default Navigation;
