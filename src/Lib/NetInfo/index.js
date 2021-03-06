import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const inititalState = {
	type: null,
	effectiveType: null
};

const useNetInfo = () => {
	const [netInfo, setNetInfo] = useState(inititalState);

	onChange = newState => {
		setNetInfo(newState);
	};

	useEffect(() => {
		NetInfo.getConnectionInfo().then(connectionInfo => {
			setNetInfo(connectionInfo);
		});
	}, []);

	useEffect(() => {
		NetInfo.addEventListener("connectionChange", onChange);

		return () => {
			NetInfo.removeEventListener("connectionChange", onChange);
		};
	}, []);

	return netInfo;
};

export default useNetInfo;
