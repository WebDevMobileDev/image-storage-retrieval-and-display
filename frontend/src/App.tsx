import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { storage } from "./utils/firebase";
import { Level, LevelHeading } from "./shared/components/simple-components";

function App() {
	
	const [schoolInfo, setSchoolInfo] = useState({ schoolName: "", schoolImage: "" });

	const { schoolName, schoolImage } = schoolInfo;

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSchoolInfo({ schoolImage, schoolName: e.target.value });
	};

	const handleFileChange = (e: any) => {
		const [file] = e.target.files;
		let reader = new FileReader();

		reader.onload = function (ev) {
			setSchoolInfo({ schoolImage: ev!.target!.result as string, schoolName });
		};
		reader.readAsDataURL(file);
	};

	async function handleSaveSchoolInfo(e: any): Promise<void> {
		e.preventDefault();

		const timestamp = new Date().getTime(); // Use a timestamp as part of the filename
		const imageName = `${timestamp}_${schoolName}`; // Include timestamp in the filename
		const storageRef = ref(storage, `profile_images/${imageName}`);

		let imageUrl = null;
		
		try {

			console.log("Uploading image to firebase storage ...");

			await uploadString(storageRef, schoolImage, "data_url");
			imageUrl = await getDownloadURL(storageRef);

			console.log(`Url of to access uploaded image: ${imageUrl}`);

		} catch (error) {}

		try {

			console.log("Saving school to backend: schoolName and imageUrl");

			const res = await axios.post("http://localhost:8080/school", {
				name: schoolName,
				logoUrl: imageUrl,
			});

			console.log("School saved, response from backend: ", res.data);

		} catch (error) {
			console.log("Error occurred while saving school: ", error);
		}
	}

	return (
		<>
			<Level>
				<LevelHeading>School name</LevelHeading>
				<TextField
					sx={{ minWidth: "300px" }}
					id="filled-basic"
					value={schoolName}
					variant="filled"
					onChange={handleNameChange}
				/>
			</Level>
			<Level>
				<LevelHeading>School logo</LevelHeading>
				<div style={{ maxWidth: "300px", maxHeight: "300px" }} className="profile-picture">
					{schoolImage ? (
						<img width={"100%"} src={schoolImage} alt="profile" />
					) : (
						<img width={"100%"} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
					)}
				</div>
				<div className="profile-form">
					<input type="file" accept="image/*" onChange={handleFileChange} />
				</div>
			</Level>

			<Level>
				<Button sx={{ minWidth: 300 }} onClick={handleSaveSchoolInfo} variant="contained">
					Save
				</Button>
			</Level>
		</>
	);

}

export default App;
