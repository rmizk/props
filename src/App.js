
import './App.css';
import Info from './profile/Info'
import p from './profile/Infoo'
import image from './IMG_8506.JPG'


function App() {
  return (
    <div className="App">
      {/* <Info 
        fullname="Ramzi Hammami"
        bio="25 ans"
        prof="Graphic designer"
        
      /> */}

      <Info 
        fullname={p[0].fullname}
        bio={p[0].bio}
        prof={p[0].prof}
        child={image}
        
      />
      
      
    </div>
  );
}

export default App;
