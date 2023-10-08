import { Text, View, Image, ActivityIndicator, Button } from 'react-native';
import styles from '../styles';
// Todo refine display with links to spotify and apple music
const ResultsScreen = ({ route, navigation }) => {
	// console.log(route.params)
	// console.log('monke')
	const { json } = route.params;
	if(json["track"] == null) {
		return (
			<View style={styles.flexContainer}>
				<Text style={styles.title}>
					No song found
				</Text>
				<Button title="Return" onPress={() => {navigation.navigate('Home')}}/>
			</View>
		);
	}
	const song = json["track"]["title"]
	const artist = json["track"]["subtitle"]
	const albumUrl = json["track"]["images"]["coverart"]
	// todo get song and artist from api
	return (
		<View style={styles.flexContainer}>
			<Image
				style={styles.albumCover}
				source={{
					uri: albumUrl,
				}}
			/>
			<View style={styles.leftAligned}>
				<Text style={styles.song}>
					{song}
				</Text>
				<Text style={styles.artist}>
					{artist}
				</Text>
			</View>
			<Button title="Return" onPress={() => {navigation.navigate('Home')}}/>
		</View>
	);
};

export default ResultsScreen;