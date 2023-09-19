import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";

// sidebar component
export default function Sidebar() {
  return (
    <Card className="md:block hidden fixed left-0 h-[100vh] w-20 p-2 shadow-xl shadow-blue-gray-900/5 bg-[#f2f4f7]">
      <List className="w-18 min-w-0">
        <ListItem className="w-18 sidebar-list-item-wrapper">
          <ListItemPrefix className="sidebar-list-item">
            <PresentationChartBarIcon className="h-5 " />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="sidebar-list-item-wrapper">
          <ListItemPrefix className="sidebar-list-item">
            <ShoppingBagIcon className="h-5 " />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="sidebar-list-item-wrapper">
          <ListItemPrefix className="sidebar-list-item">
            <InboxIcon className="h-5 " />
          </ListItemPrefix>
          <ListItemSuffix></ListItemSuffix>
        </ListItem>
        <ListItem className="sidebar-list-item-wrapper">
          <ListItemPrefix className="sidebar-list-item">
            <UserCircleIcon className="h-5 " />
          </ListItemPrefix>
        </ListItem>

        <div className="bottombottom absolute bottom-[0px]">
          <ListItem className="sidebar-list-item-wrapper">
            <ListItemPrefix className="sidebar-list-item">
              <BellAlertIcon className="h-5 " />
            </ListItemPrefix>
          </ListItem>
          <ListItem className="sidebar-list-item-wrapper">
            <ListItemPrefix className="sidebar-list-item">
              <PowerIcon className="h-5 " />
            </ListItemPrefix>
          </ListItem>
          <ListItem className="sidebar-list-item-wrapper">
            <ListItemPrefix className="sidebar-list-item">
              <span className="img h-[30px] w-[30px] inline-block border rounded overflow-hidden rounded-[50%]">
                <img src="/mobile.jpg" />
              </span>
            </ListItemPrefix>
          </ListItem>
        </div>
      </List>
    </Card>
  );
}
