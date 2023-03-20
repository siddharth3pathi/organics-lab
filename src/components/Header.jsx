import "../styles/header.css";

const Header = () =>{
    return(
        <header>
            <nav>
                <h1>Organics Lab</h1>
            </nav>
            <div className="header-content">
                <h1>This is heading text</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris, turpis interdum massa condimentum mauris amet volutpat.</p>
                <button>Let’s Go Healthy</button>
                <img src="./images/header-image.png" alt="Header pic" />
            </div>
        </header>
    )
}

export default Header;