export const ContentVariant = {
	initial: {
		x: "-10vw",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.45,
		},
	},
};

export const ContentChildVariant = {
	initial: {
		x: "-10vw",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.25,
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
			staggerChildren: 0.15,
			type: "spring",
			bounce: 0.25,
			stiffness: 50,
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
		scale: 0.75,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			delay: 1,
			type: "spring",
			duration: 1.5,
			bounce: 0.25,
		},
	},
};

export const MobileContentVariant = {
	initial: {
		x: "-10vw",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			type: "spring",
			when: "beforeChildren",
		},
	},
};

export const MobileContentChildVariant = {
	initial: {
		x: "-10vw",
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
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
			staggerChildren: 0.15,
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
