import React from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { DefaultAccordion } from "../Accordion";
import { BellAlertIcon } from "@heroicons/react/24/solid";

//
export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button
        onClick={openDrawer}
        className="flex bg-red-300  text-center p-2.5"
      >
        <BellAlertIcon className="md:w-[35px] w-[20px]" />
      </Button>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4"
      >
        <DefaultAccordion />
      </Drawer>
    </React.Fragment>
  );
}
