import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2rem" spacing="20px">
      <ListItem>
        <Link href="/">
          <ListIcon as={CalendarIcon} />
          Dashboard
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/create">
          <ListIcon as={EditIcon} />
          New task
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/profile">
          <ListIcon as={AtSignIcon} />
          Profile
        </Link>
      </ListItem>
    </List>
  );
};

export default Sidebar;
