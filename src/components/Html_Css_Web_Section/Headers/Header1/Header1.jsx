import React from 'react';
import './Header1.css'
import bg_img from "./images/profil2.jpg"

function Header1() {
    return (

        <main>
            <div id="Header2">
                <div class="container">
                    <div class="containt">
                        <h3>HI THERE</h3>
                        <h2>I'M PIERRE-ANDRE</h2>
                        <h5>FRONT-END WEB DEVELOPER</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis explicabo non architecto nobis, eaque possimus asperiores qui sint quod repudiandae sunt eum est consequatur natus, inventore accusamus ipsum repellendus laboriosam.</p>
                        <button>Contact Me</button>
                    </div>
                    <div class="img_box">
                        <img src={bg_img} />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Header1




// import logo from './logo.svg';
// import './App.css';
// import Header1 from './Headers/Header1/Header1';

// function App() {
//     return (
//         <div className="App">
//             <Header1 />
//         </div>
//     );
// }

// export default App;
