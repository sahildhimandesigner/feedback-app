import Header from "./components/header";
import FeedbackItem  from "./components/FeedbackItems";

function App(){
    return(
        <>  
            <Header />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    )
}

export default App;