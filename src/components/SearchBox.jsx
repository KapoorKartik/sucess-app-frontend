import React from "react";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

const SearchBox = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    // console.log('e.target:', e.target)
    // console.log("Search query:", e.target.elements.searchQuery.value);
    // e.target.elements.searchQuery.value = "";
  };

  return (
    <>
      {/* <Form  border="danger" className="mb-2 mt-1 mr-3" style={{border : "0px solid red"}} onSubmit={handleSearch} inline>
      <InputGroup  className="mb-2 mr-sm-2 mb-sm-0">
        <FormControl type="text" placeholder="Search" name="searchQuery" />
        <InputGroup.Text >
        <Button type="submit"> <i className="bi bi-search"></i></Button>
         
        </InputGroup.Text>
      </InputGroup>
    </Form> */}
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid ">
          <form className="d-flex flex-grow-1" onSubmit={handleSearch}>
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default SearchBox;
