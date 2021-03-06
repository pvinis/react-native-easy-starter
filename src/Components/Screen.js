import React from "react";
import viewStyles from "../Styles/ViewStyles";
import ViewX from "./View";
import colors from "../Themes/Colors";

export default ({ style, ...other }) => {
	return (
		<ViewX
			{...other}
			style={[
				viewStyles.container,
				style,
				{ backgroundColor: "#dddddd" }
			]}
			useSafeAreaView
		/>
	);
};

export const Container = ({ style, ...other }) => {
	return <ViewX {...other} style={[viewStyles.container, style]} />;
};

export const Box = ({ style, ...other }) => {
	return <ViewX {...other} style={[style]} />;
};
