import './App.css';
import React, {useState, useEffect}  from 'react';

const API = 'https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json'

let backgrounds = ['https://wallpaperaccess.com/full/1616109.jpg',
'https://undsgn.com/wp-content/uploads/2018/04/ltotbngnzzu.jpg',
'https://www.teahub.io/photos/full/43-439320_light-and-shadow-background.jpg',
'https://images.unsplash.com/photo-1489846986031-7cea03ab8fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
'https://i1.wp.com/getwallpapers.com/wallpaper/full/2/9/e/1519933-vertical-dark-theme-wallpaper-2560x1656-mac.jpg',
'https://wallpapercave.com/wp/wp2533093.jpg',
'https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1479267658415-ff274a213280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.pexels.com/photos/1420003/pexels-photo-1420003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'https://images.pexels.com/photos/204366/pexels-photo-204366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'https://images.pexels.com/photos/53153/full-moon-moon-night-sky-53153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'https://images.pexels.com/photos/358528/pexels-photo-358528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
'https://images.pexels.com/photos/417070/pexels-photo-417070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];


function App() {

  const[quotes, setQuotes] = React.useState([]);
  const[randomQuote, setRandomQuote] = React.useState([]);
  const[background, setBackground]= React.useState(['https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']);
  
React.useEffect(() => {
    async function fetchData (){
      const response = await fetch(API)
      const data = await response.json();
      setQuotes(data);  
    }
    fetchData();
},[])

const getNewQuote = () =>{
  let randIndex = Math.floor(Math.random() * quotes.length);
  setRandomQuote(quotes[randIndex])

  let randBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
  setBackground (backgrounds[randBackgroundIndex])
}
console.log(background)
  return (
    <div className="container" style={{backgroundImage: `url(${background})`}}>
      
      <div className="quote-box" >
        
        <div className="quote-box-quote"><cite>"{randomQuote.quote}"</cite> </div>
        <div className ="quote-box-author"><p><strong>{randomQuote.author}</strong></p></div>
        
      </div>
        
    <div className="button-container">
    <button className="button" onClick={getNewQuote}>Press me and Find Inspiration</button>
    </div>
    </div>
  );
}

export default App;


