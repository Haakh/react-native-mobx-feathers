import variable from './../variables/platform';

export default (variables = variable) => {
	const swipeRowTheme = {
		'NativeBase.ListItem': {
			backgroundColor: '#FFF',
			marginLeft: 0,
		},
		'NativeBase.Left': {
			flex: 0,
			alignSelf: null,
			alignItems: null,
			'NativeBase.Button': {
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'stretch',
				borderRadius: 0,
			},
		},
		'NativeBase.Right': {
			flex: 0,
			alignSelf: null,
			alignItems: null,
			'NativeBase.Button': {
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'stretch',
				borderRadius: 0,
			},
		},
		'NativeBase.Button': {
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'stretch',
			borderRadius: 0,
		},
	};

	return swipeRowTheme;
};
