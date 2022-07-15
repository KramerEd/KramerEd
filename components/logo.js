import Link from "next/link";
import Image from "next/image";
import "@fontsource/m-plus-1";
import logoImg from "../public/images/me-logo.PNG";
import logoImgHi from "../public/images/me-logo-hi.PNG";
import { useState } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

import styled from "@emotion/styled";

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 22px;
	display: flex;
	align-items: center;
	padding: 0 15px;
	& img {
		transition: 400ms;
		position: relative;
		opacity: 1;
	}
	&:hover img {
		transform: rotate(25deg) scale(1.15);
	}
	img:hover {
		animation: hover-logo 1s;
	}
	@keyframes hover-logo {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Logo = () => {
	const [hover, setHover] = useState(false);

	const handleHover = () => {
		setHover(!hover);
	};

	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image
						height={50}
						width={50}
						src={hover ? logoImg : logoImgHi}
						onMouseEnter={handleHover}
					/>
					<Text
						color={useColorModeValue("gray.800", "whiteAlpha.900")}
						fontFamily="M PLUS 1, sans-serif"
						fontWeight="bold"
						ml={3}
					>
						Kramer Ed
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};
export default Logo;
