import React, { Component } from "react";
import Table from '../organisms/Table';
import SearchBar from "../molecules/SearchBar";

class ListStudent extends Component {
   state = {
      headers: ["No", "Name", "Class", "Year", "NIM", "Guardian Name", "Birth Date", "Address", "Gender", "Action"],
   }

   componentDidMount() {
      this.props.fetchStudents();
   }

   render() {
      return (
         <>
            <SearchBar 
               type="text"
               placeholder="Search..."
               onClick={this.props.setIsFormVisible}
               onSearch={this.props.handleSearch}
               handleChangeQuery={this.props.handleChangeQuery}
            />

            <Table 
               headers={this.state.headers} 
               data={this.props.students} 
               editStudent={this.props.editStudent}
               handleDelete={this.props.handleDelete}
            />
         </>
      );
   }
}
export default ListStudent;
