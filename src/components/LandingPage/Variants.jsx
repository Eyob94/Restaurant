export const ContentVariant = {
	initial: {
		x: "-60vw",
	},
	animate: {
		x: 0,
		transition: {
			staggerChildren: 0.5,
			delayChildren: 0.5,
		},
	},
};

export const ContentChildVariant = {
	initial: {
		x: "-60vw",
	},
	animate: {
		x: 0,
		transition: {
			type: "spring",
			bounce: 0.5,
		},
	},
};

export const socialMediaButton = {
	initial: {
		y: "-5vh",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			staggerChildren: 0.5,
			type: "spring",
			bounce: 1,
			stiffness: 1000,
		},
	},
};

export const socialMediaChildButtons = {
	initial: {
		y: "-5vh",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};

export const ImageVariant = {
	initial: {
		scale: 0,
	},
	animate: {
		scale: 1,
		transition: {
			delay: 3.5,
			type: "spring",
			duration: 2,
			bounce: 0.5,
		},
	},
};

export const MobileContentVariant = {
	initial: {
		x: "-110vw",
	},
	animate: {
		x: 0,
		transition: {
			staggerChildren: 0.25,
			type: "spring",
			when: "beforeChildren",
		},
	},
};

export const MobileContentChildVariant = {
	initial: {
		x: "-110vw",
	},
	animate: {
		x: 0,
		transition: {
			duration: 0.75,
			type: "spring",
		},
	},
};

export const MobileSocialMediaVariant = {
	initial: {
		y: "-5vh",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			staggerChildren: 0.5,
			type: "spring",
			bounce: 1,
			stiffness: 50,
		},
	},
};

export const MobileSocialMediaChildVariant = {
	initial: {
		y: "-5vh",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};
