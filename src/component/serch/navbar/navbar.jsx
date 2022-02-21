import "./navbar.css"
export const Navbar = () => {
    return (
        <div id="navbar" className="nav">
            <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt=""></img>
            <input type="text" placeholder="Search"/>
            <button className="search">Search</button>
        </div>
    )
}