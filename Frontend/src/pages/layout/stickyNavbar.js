import React from "react";
import myImage from "../../images/profile-default.jpg"

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-2 py-2 lg:px-12 lg:py-3">

      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center justify-between">

          <Typography 
          size="xl" 
          fontWeight="bold"
          className="font-bold text-xl"
          style={{ color: 'darkblue', border: '2px solid darkblue', padding: '5px' }}>
          StudIA
          </Typography>
        </div>

        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium "
        >

        </Typography>



      </div>

    </Navbar>
  );
}