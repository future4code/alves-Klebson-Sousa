import React, { Component } from "react";
import axios from "axios";
import CreateList from "./components/createList/CreateList";
import PlayList from "./components/playList/PlayList";

export default class App extends Component {
  state = {
    homeScreen: "Home",
  };
  choosePage = () => {
    switch (this.state.homeScreen) {
      case "Home":
        return <CreateList irParaPlayList={this.irParaPlayList} />;
      case "Detail":
        return <PlayList irParaHome={this.irParaHome} />;
      default:
        return <div>Erro!</div>;
    }
  };
  irParaHome = () => {
    this.setState({ homeScreen: "Home" });
  };
  irParaPlayList = () => {
    this.setState({ homeScreen: "Detail" });
  };

  render() {
    return <div>{this.choosePage()}</div>;
  }
}
