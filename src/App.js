import { Container, Switch, withStyles } from '@material-ui/core';
import { pink } from "@material-ui/core/colors";
import Header from './components/Header/Headers'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const dictionaryApi = async() => {
      try {
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        setMeanings(data.data);
      } catch(error) {
        console.log(error);
      }
  };

  const DarkMode = withStyles({
    switchBase: {
      color: pink[50],
      "&$checked": {
        color: pink[900],
      },
      "&$checked + $track": {
        backgroundColor: pink[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    dictionaryApi();
  },[word, category]);

  return (
    <div 
      className="App"
      style={{
        height:'100vh',
        backgroundColor: LightMode? "skyblue" : ' #0072b1', 
        color: LightMode? "#0072b1":' #FAF9F6',
        transition:"all 0.5s linear"
        }}>
      <Container 
        maxWidth="md" 
        style={{display:'flex', flexDirection:'column', height:'100vh', justifyContent:"space-evenly"}}
      >
        <div 
          style={{position: "absolute", top: 0, right: 15, paddingTop: 10}}>
          <span>{LightMode?"Dark":"Light"} Mode</span>
          <DarkMode 
            checked={LightMode} 
            onChange={()=> setLightMode(!LightMode)} 
          />
        </div>
        <Header 
          category={category} 
          setCategory={setCategory} 
          word={word} setWord={setWord}
          LightMode={LightMode}
        />
        {meanings && (
          <Definitions 
            word={word} 
            meanings={meanings} 
            category={category} 
            LightMode={LightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
