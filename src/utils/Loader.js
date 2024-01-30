import "../components/styles.css"
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
export default function App() {
    return (
        <div className="App">
            <h1>Normal Circular Progress Bar</h1>
            <CircularProgress value={10} />
            <br />
            <h1>Text Circular Progress Bar</h1>
            <CircularProgress value={40}>
                <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
            <br />
            <h1>Animated Progress Bar</h1>
            <CircularProgress color="purple" isIndeterminate />
        </div>
    );
}
