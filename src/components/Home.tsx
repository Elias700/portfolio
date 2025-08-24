import './Home.css'

const Home = () => {
    return (
        <header>  
            <nav className='navegacao'>
                <ul>
                    <div className="container-logo">
                        <p className='logo'>Portfolio</p>
                    </div>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>About me</li>
                </ul>
            </nav>
        </header>
    )
};

export default Home;