import ConvertButton from "./ConvertButton";
import Token from "./Token";

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="app__inner">
                <ConvertButton />
                <Token />
                <Token />
            </div>
        </div>
    );
};

export default App;
