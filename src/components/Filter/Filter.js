import React from "react";
import { Input, Select } from "./styled";

export default class Filter extends React.Component {
  render() {
    return (
      <div className="App">
        <Input
          type="number"
          onChange={this.props.onChangeMinValue}
          value={this.props.minValue}
          placeholder="valor mínimo"
        />
        <Input
          type="number"
          onChange={this.props.onChangeMaxValue}
          value={this.props.maxValue}
          placeholder="valor máximo"
        />

        <Input
          type="text"
          onChange={this.props.onChangeSearchProd}
          value={this.props.searchProd}
          placeholder="buscar"
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
      </div>
    );
  }
}
