import { FC } from "react";
import { Heading } from "@chakra-ui/react";

type props = {
  title: string;
};

const Header: FC<props> = ({ title }) => {
  return <Heading>{title}</Heading>;
};

export default Header;
