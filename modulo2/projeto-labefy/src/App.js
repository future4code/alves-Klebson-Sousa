import React, { Component } from "react";
import axios from "axios";
import CreateList from "./components/createList/CreateList";
import PlayList from "./components/playList/PlayList";
import ListMusic from "./components/musicas/ListMusic"

export default class App extends Component {
  state = {
    homeScreen: "Home",
  };
  mudarTela = (screen) => {
    this.setState({ homeScreen: screen });
  };
  choosePage = () => {
    switch (this.state.homeScreen) {
      case "Home":
        return <CreateList mudarTela={this.mudarTela} />;
      case "Detail":
        return <PlayList mudarTela={this.mudarTela} />;
      default:
        return <ListMusic mudarTela={this.mudarTela}/>;
    }
  };
  
  render() {
    return <div>{this.choosePage()}</div>;
  }
}
