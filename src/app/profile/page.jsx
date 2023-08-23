"use client";

import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Tabs
      mt="40px"
      p="20px"
      colorScheme="purple"
      variant="enclosed"
      borderColor="white"
    >
      <TabList>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>Account Info</Tab>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>Account Info</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              iambigeasy93@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              animi!
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              saepe.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos!
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              animi!
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              saepe.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              saepe.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              saepe.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              saepe.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
