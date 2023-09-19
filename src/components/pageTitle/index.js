import React from "react";
import { Typography } from "@material-tailwind/react";
import ChartComponent from "../chart";
import CardComponent from "./Card";
import DrawerComponent from "../../components/drawer";

let tempArray = [
  {
    color: "purple",
    capacity: 7,
  },
  {
    color: "red",
    capacity: 5,
  },
  {
    color: "purple",
    capacity: 7,
  },
  {
    color: "red",
    capacity: 5,
  },
];

// page title component
const PageTitle = () => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4 p-5">
        <div className="col-span-12">
          <Typography
            variant="h1"
            className="flex items-center text-[20px] border-b-[#a6adb6] border-b border-solid pb-[20px]"
          >
            Performance Tracker
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#3ccb7f"
              class="bi bi-camera-video ml-4"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
              />{" "}
            </svg>
          </Typography>
        </div>
      </div>
      <div className="px-5">
        <Typography
          variant="h5"
          className="text-[#079455] flex items-center justify-between"
        >
          <div>
            <span className="mr-2">Group</span>
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </div>
          <DrawerComponent />
        </Typography>
        <div class="relative h-10 max-w-[500px] flex items-center mt-[20px]">
          <select class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500   focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
            <option value="brazil">Cell Phones Charging Stations</option>
            <option value="bucharest">Bucharest</option>
            <option value="london">London</option>
            <option value="washington">Washington</option>
          </select>
          <i
            class="fa fa-plus"
            aria-hidden="true"
            style={{
              height: "100%",
              lineHeight: "40px",
              marginLeft: 5,
              color: "#17b26a",
              background: "#ecfdf3",
              width: "50px",
              border: "1px solid #17b26a",
              textAlign: "center",
              borderRadius: "10px",
            }}
          ></i>
        </div>
      </div>
      <div class="md:flex block grid-flow-col gap-4 p-5">
        <div class="col-span-1 left-block">
          <div class="row-span-2 flex justify-between h-[40px]">
            <Typography
              variant="h5"
              className="text-[#079455] flex items-center"
            >
              <span className="mr-2">ASINs</span>
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </Typography>
            <i
              class="fa fa-plus"
              aria-hidden="true"
              style={{
                height: "100%",
                lineHeight: "40px",
                marginLeft: 5,
                color: "#17b26a",
                background: "#ecfdf3",
                width: "40px",
                border: "1px solid #17b26a",
                textAlign: "center",
                borderRadius: "10px",
              }}
            ></i>
          </div>
          {tempArray.map((val) => (
            <CardComponent val={val} />
          ))}
        </div>
        <div class="col-span-1 right-block">
          <ChartComponent />
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
