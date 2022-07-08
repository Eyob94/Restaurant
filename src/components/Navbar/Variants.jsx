export const SideMenuVariant = {
	initial: {
		x: "100vw",
	},
	animate: {
		x: 0,
	},
};

export const UserVariant = {
	initial: {
		y: "-2vh",
	},
	animate: {
		y: 0,
	},
	exit: {
		y: "-2vh",
		opacity: 0,
		transition: {
			duration: 0.1,
		},
	},
};
