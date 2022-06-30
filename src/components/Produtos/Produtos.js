import React from "react";
import Filter from "../Filter/Filter";

export default class Produtos extends React.Component {
  state = {
    minValue: "",
    maxValue: "",
    searchProd: "",
    order: "Título"
  };

  onChangeMinValue = (e) => {
    this.setState({ minValue: e.target.value });
  };
  onChangeMaxValue = (e) => {
    this.setState({ maxValue: e.target.value });
  };
  onChangeSearchProd = (e) => {
    this.setState({ searchProd: e.target.value });
  };
  onChangeOrder = (e) => {
    this.setState({ order: e.target.value });
  };
  render() {
    const filteredJobs = this.props.produtos
      .filter((job) => {
        let minVal = this.state.minValue ? this.state.minValue : -Infinity;
        let maxVal = this.state.maxValue ? this.state.maxValue : Infinity;
        let search = this.state.searchProd.toLowerCase();
        let title = job.title.toLowerCase();
        return (
          job.price >= minVal && job.price <= maxVal && title.includes(search)
        );
      })
      .sort((a, b) => {
        switch (this.state.order) {
          case "Título":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
          case "Decrescente":
            return b.price - a.price;
          case "Crescente":
            return a.price - b.price;
          default:
            return a.price - b.price;
        }
      });
    const joblist = filteredJobs.map((job) => {
      return (
        <div key={job.title}>
          {" "}
          {job.title} <b>R${job.price}</b>{" "}
        </div>
      );
    });

    return (
      <div className="App">
        <Filter
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          searchProd={this.state.searchProd}
          order={this.state.order}
          onChangeMinValue={this.onChangeMinValue}
          onChangeMaxValue={this.onChangeMaxValue}
          onChangeSearchProd={this.onChangeSearchProd}
          onChangeOrder={this.onChangeOrder}
        />

        {joblist}
      </div>
    );
  }
}