import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
    };
  }
  render() {
    const { state, getCurrentDog } = this.props;
    return (
      <div className="header-box">
        <select
          className="select"
          value={this.state.selectedValue}
          onChange={(e) => {
            const { value } = e.target;
            getCurrentDog(value);
            this.setState({ selectedValue: value });
          }}
        >
          {state.map((item) => {
            return (
              <option value={item} key={uuidv4()}>
                {item}
              </option>
            );
          })}
        </select>
        <Button
          variant="contained"
          className="fetch-btn"
          value={this.state.selectedValue}
          onClick={(e) => {
            const { value } = e.target;
            getCurrentDog(value);
            this.setState({ selectedValue: value });
          }}
        >
          Fetch!
        </Button>
      </div>
    );
  }
}

export default Header;
