import "./home.css"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt=""/>
            </div>
            <input type="text" placeholder="Search google" className="search-box" onKeyDown={(e) => {
                if(e.key === 'Enter'){
                    
                }
            }}></input>
            <button><Link to="/search/:q=YourQuery">Enter</Link></button>
        </div>
    )
}