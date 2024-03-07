import React from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../../images/profile-default.jpg";

import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
	Card,
	Popover,
	PopoverHandler,
	PopoverContent,
	Avatar,
	List,
	ListItem,
	ListItemPrefix,
} from "@material-tailwind/react";

export default function StickyNavbar() {
	const [openNav, setOpenNav] = React.useState(false);
	const navigate = useNavigate(); // Hook de navegación

	React.useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	return (
		<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-2 py-2 lg:px-12 lg:py-3">
			<div className="flex items-center justify-between text-blue-gray-900">
				<div className="flex items-center justify-between" onClick={() => navigate("/")}>
					<Typography
						size="xl"
						fontWeight="bold"
						className="font-bold text-xl"
						style={{ color: "darkblue", border: "2px solid darkblue", padding: "5px" }}
					>
						StudIA
					</Typography>
				</div>

				<div>
					<Popover placement="bottom-end">
						<PopoverHandler>
							{/* <Button className="bg-red-100">Contact Us</Button> */}
							<div className="flex w-max items-end round">
								<Avatar
									src="https://www.pngmart.com/files/22/User-Avatar-Profile-Download-PNG-Isolated-Image.png"
									alt="avatar"
									size="sm"
									className="rounded-full"
									onClick={() => navigate("/register")}
								/>
							</div>
						</PopoverHandler>
						<PopoverContent className="w-72">
							<List className="p-0">
								<a href="#" className="text-initial font-bold font-medium text-blue-gray-500 py-2">
									<ListItem className="font-bold">Juan Monsalve</ListItem>
								</a>
								<a href="#" className="text-initial font-medium text-blue-gray-500 py-2">
									<ListItem>juan.monsalve@gmail.com</ListItem>
								</a>
								<a href="#" className="text-initial font-medium text-blue-gray-500 py-2">
									<Button
										variant="outlined"
										size="lg"
										className="w-full rounded-lg border-2 border-black py-1"
									>
										Cerrar sesión
									</Button>
								</a>
							</List>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</Navbar>
	);
}
