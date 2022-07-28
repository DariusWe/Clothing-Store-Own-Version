import "./landing-page.scss"
import { useParams } from "react-router-dom";

const LandingPage = () => {
    const params = useParams();

    return (
        <div className="landing-page-container">
            {
                params.sex === undefined || params.sex === "women" ? <h1>Women's Landing Page</h1> : <h1>Men's Landing Page</h1>
            }
        </div>
    );
}

export default LandingPage;