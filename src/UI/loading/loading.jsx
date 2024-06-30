import st from "./loading.module.css";
export const Loading = () => {
	return (
		<div className={st.loading}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
				<radialGradient
					id="a12"
					cx=".66"
					fx=".66"
					cy=".3125"
					fy=".3125"
					gradientTransform="scale(1.5)"
				>
					<stop offset="0" stopColor="#E94D2AFF"></stop>
					<stop offset=".3" stopColor="#E94D2AFF" stopOpacity=".9"></stop>
					<stop offset=".6" stopColor="#E94D2AFF" stopOpacity=".6"></stop>
					<stop offset=".8" stopColor="#E94D2AFF" stopOpacity=".3"></stop>
					<stop offset="1" stopColor="#E94D2AFF" stopOpacity="0"></stop>
				</radialGradient>
				<circle
					transform-origin="center"
					fill="none"
					stroke="url(#a12)"
					strokeWidth="4.75"
					strokeLinecap="round"
					strokeDasharray="50 250"
					strokeDashoffset="0"
					cx="25"
					cy="25"
					r="17.5"
				>
					<animateTransform
						type="rotate"
						attributeName="transform"
						calcMode="spline"
						dur="3.2"
						values="360;0"
						keyTimes="0;1"
						keySplines="0 0 1 1"
						repeatCount="indefinite"
					></animateTransform>
				</circle>
				<circle
					transform-origin="center"
					fill="none"
					opacity=".2"
					stroke="#E94D2AFF"
					strokeWidth="4.75"
					strokeLinecap="round"
					cx="25"
					cy="25"
					r="17.5"
				></circle>
			</svg>
		</div>
	);
};
