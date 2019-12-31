import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Navbar from './components/Navbar';
import CenterNavBar from './components/CenterNavBar';
import HomePage from './components/HomePage';
import SearchBar from './components/SearchBar';

describe("app component", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  })
  it("navbar should always be on the website", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.contains(<Navbar/>)).toBe(true);
  })
})


describe("search bar", () => {
  it("should not appear on home page", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.contains(<SearchBar/>)).toBe(false);
  })
  it("should appear on nav bar", () => {
    const wrapper = shallow(<CenterNavBar />);
    expect(wrapper.contains(<SearchBar/>)).toBe(true);
  })
})