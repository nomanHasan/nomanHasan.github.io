import React from 'react';
import { render } from 'react-dom';
import { Navbar } from './component/navbar.jsx';
import { Home } from './component/home.jsx';
import { Skills } from './component/skills.jsx';
import { Education } from './component/education.jsx';
import {Title } from './template/title.jsx';
import {Projects } from './component/projects.jsx';
import {Websites } from './component/websites.jsx';


class App extends React.Component {
  render() {
    return <div className="App cloud">
      <Navbar/>
      <Home/>
      <Title title="Developed Websites" id="websites" />
      <Websites/>
      <Title title="Projects" id="projects" />
      <Projects/>
      <Title title="Skills" subtitle="Skills in Programming" id="skills"/>
      <Skills/>
      <Title title="Education" id="education" />
      <Education/>
    </div>;
  }
}

render(<App />, document.getElementById('app'));
