// function Heading(){
//     return(
//         <h1>MY Name Is Mubashir</h1>
//     )
// }

// ReactDOM.render(<Heading />, document.getElementById("root"))


// const h1 = document.createElement("h1")
// h1.textContent = "Hello JavaScript"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const Navigation = (<div>
//             <h1>Fun Facts About Raect</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordon Walke</li>
//                 <li>Has well over 100K on GitHub</li>
//                 <li>Is maintained by Meta</li>
//                 <li>Powers thousands of enterprise apps, including mobile Apps.</li>
//             </ul>
//         </div>
//     )

// ReactDOM.render(Navigation , document.getElementById("root"))
// const Data = (
//     <div>
//         <img src="./React-icon.svg.png" width="60px" alt="React-Logo" /> 
//         <h1>Fun Facts About Raect</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordon Walke</li>
//             <li>Has well over 100K on GitHub</li>
//             <li>Is maintained by Meta</li>
//             <li>Powers thousands of enterprise apps, including mobile Apps.</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(Data, document.getElementById("root"))
function Header(){
    return(
        <header>
            <nav className="nav">
                <img className="image" src = "React-icon.svg.png" alt="React-LOGO" />
                <ul className = "nav-item">
                     <li>Pricing</li>
                     <li>About</li>
                     <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Main(){
    return(
       <div className ="Main">
         <h1>Reasons I am learning React</h1>
            <ol>
            <li>To Complete my fisrt project</li>
            <li>For enhacing my skills</li>
            <li>To get experience of many things</li>
        </ol>
       </div>
    )
}

function Footer(){
    return (
<footer className = "footer">
         <small>&copy; 2022 Meta. All rights recived</small>
     </footer>
    )
}

function Reasons(){
    return(
        <div>
        <Header />
        <Main/>
        <Footer />
     </div>
    )
}
// ReactDOM.render(<Header />, document.getElementById("root"))

ReactDOM.render(<Reasons />, document.getElementById("root"))