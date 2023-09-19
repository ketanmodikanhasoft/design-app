import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// accordian design components
export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div>
        <div className="mb-4 text-black">Notifications</div>
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} className="sidebarAccordion" />}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="accordionTitle flex flex-wrap p-0"
          >
            <span className="img h-[50px] w-[50px] inline-block border rounded overflow-hidden border-solid border-[#ccc] ">
              <img src="/mobile.jpg" />
            </span>
            <div className="maintitle pl-2 relative">
              <p className="text-[16px] font-normal">title</p>
              <h3 className="text-[#17b26a] text-[16px]">
                3-in-1 Wirless chager
              </h3>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="pl-[30px]">
              <div className="relative flex w-full pr-5 mb-3">
                <span className="img h-[50px] w-[50px] inline-block border rounded overflow-hidden border-solid border-[#ccc] ">
                  <img src="/mobile.jpg" />
                </span>

                <div className="maintitle pl-2 relative">
                  <p className="text-[14px] text-[#000] font-normal">
                    title <span className="text-[#ccc]">1 day ago</span>
                  </p>
                  <h3 className="text-[#17b26a] text-[14px] font-semibold">
                    3-in-1 Wirless chager
                  </h3>
                </div>
              </div>
              <div className="relative flex w-full pr-5 mb-3">
                <span className="img h-[50px] w-[50px] inline-block border rounded overflow-hidden border-solid border-[#ccc] ">
                  <img src="/mobile.jpg" />
                </span>

                <div className="maintitle pl-2 relative">
                  <p className="text-[14px] text-[#000] font-normal">
                    title <span className="text-[#ccc]">1 day ago</span>
                  </p>
                  <h3 className="text-[#17b26a] text-[14px] font-semibold">
                    3-in-1 Wirless chager
                  </h3>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} className="sidebarAccordion" />}
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="accordionTitle flex flex-wrap p-0"
          >
            <span className="img h-[50px] w-[50px] inline-block border rounded overflow-hidden border-solid border-[#ccc] ">
              <img src="/mobile.jpg" />
            </span>

            <div className="maintitle pl-2 relative">
              <p className="text-[16px] font-normal">title</p>
              <h3 className="text-[#17b26a] text-[16px]">
                3-in-1 Wirless chager
              </h3>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="pl-[30px]">
              <div className="relative flex w-full pr-5 mb-3">
                <span className="img h-[50px] w-[50px] inline-block border rounded overflow-hidden border-solid border-[#ccc] ">
                  <img src="/mobile.jpg" />
                </span>

                <div className="maintitle pl-2 relative">
                  <p className="text-[14px] text-[#000] font-normal">
                    title <span className="text-[#ccc]">1 day ago</span>
                  </p>
                  <h3 className="text-[#17b26a] text-[14px] font-semibold">
                    3-in-1 Wirless chager
                  </h3>
                </div>
              </div>
              <div className="relative flex w-full pr-5 mb-3">
                <span className="img h-[50px] w-[50px] inline-block border rounded overflow-hidden border-solid border-[#ccc] ">
                  <img src="/mobile.jpg" />
                </span>

                <div className="maintitle pl-2 relative">
                  <p className="text-[14px] text-[#000] font-normal">
                    title <span className="text-[#ccc]">1 day ago</span>
                  </p>
                  <h3 className="text-[#17b26a] text-[14px] font-semibold">
                    3-in-1 Wirless chager
                  </h3>
                </div>
              </div>
            </div>
          </AccordionBody>
        </Accordion>

        <div className="py-2.5 border-b-[#ccc] border-b border-solid">
          <h2 className="text-[14px] text-[#000] font-normal mb-2">
            Subscrtuction <span className="text-[#ccc]">26 min ago</span>
          </h2>
          <p className="text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and{" "}
            <a href="#" className="text-[#17b26a] text-[16px] font-semibold">
              Click here{" "}
            </a>{" "}
            typesetting industry.{" "}
          </p>
        </div>
        <div className="py-2.5 border-b-[#ccc] border-b border-solid">
          <h2 className="text-[14px] text-[#000] font-normal mb-2">
            Subscrtuction <span className="text-[#ccc]">26 min ago</span>
          </h2>
          <p className="text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and{" "}
            <a href="#" className="text-[#17b26a] text-[16px] font-semibold">
              Upgrade plan{" "}
            </a>{" "}
            typesetting industry.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
