import React from "react";
import "./App.css";
import Header from "./components/Header";
import ImageContainer from "./components/Section/ImageContainer";
import { getAllData, getImage } from "./Request";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      imgUrl: "",
    };
  }
  async componentDidMount() {
    const getAll = await getAllData();
    this.setState({ list: Object.keys(getAll.message) });
  }

  getCurrentDog = async (name) => {
    const getCurrentImage = await getImage(name);
    this.state.imgUrl = getCurrentImage.message;
    this.setState({ imgUrl: this.state.imgUrl });
  };

  render() {
    return (
      <div className="App">
        <Header state={this.state.list} getCurrentDog={this.getCurrentDog} />
        <ImageContainer imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
