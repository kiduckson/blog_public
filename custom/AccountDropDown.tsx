// essential
import React from "react";

// external lib
import { PersonIcon } from "@radix-ui/react-icons";

//component
import { Button, DropdownMenu } from "../components";

// custom
import { Auth } from "./Auth";

export const AccountDropDown = () => {
  return (
    <DropdownMenu.DropdownMenu>
      <DropdownMenu.DropdownMenuTrigger asChild>
        <Button ghost>
          <PersonIcon />
        </Button>
      </DropdownMenu.DropdownMenuTrigger>
      <DropdownMenu.DropdownMenuContent align="end">
        <Auth />
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenu>
  );
};
