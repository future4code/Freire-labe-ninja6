import React from "react";
import { Input, Select, Div } from "./styled";
import TextField from "@mui/material/TextField";

export default class Filter extends React.Component {
  render() {
    return (
      <Div>
        <TextField
          id="outlined-basic"
          label="valor mínimo"
          variant="outlined"
          type="number"
          size="small"
          onChange={this.props.onChangeMinValue}
          value={this.props.minValue}
        />
        <TextField
          type="number"
          size="small"
          onChange={this.props.onChangeMaxValue}
          value={this.props.maxValue}
          id="outlined-basic"
          label="valor máximo"
          variant="outlined"
        />

        <TextField
          type="text"
          size="small"
          onChange={this.props.onChangeSearchProd}
          value={this.props.searchProd}
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
        />
        <Select
          name=""
          id=""
          onChange={this.props.onChangeOrder}
          value={this.props.order}
        >
          <option value={"Título"}>Título</option>
          <option value={"Crescente"}>Crescente</option>
          <option value={"Decrescente"}>Decrescente</option>
          <option value={"Prazo"}>Prazo</option>
        </Select>
      </Div>
    );
  }
}
