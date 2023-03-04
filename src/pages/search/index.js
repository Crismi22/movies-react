// import React, { useState } from "react";
// import { Form, FormControl, Button } from "react-bootstrap";
// import { API_KEY } from "../../utils/constantes";


// const Search = ({ setSearchResults }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const handleSearch = (query) => {
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
//       .then(response => response.json())
//       .then(data => setSearchResults(data.results))
//       .catch(error => console.error(error));
//   };
 
  

//   return (
//     <Form inline onSubmit={handleSearch}>
//       <FormControl
//         type="text"
//         placeholder="Search"
//         className="mr-sm-2"
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//       />
//       <Button type="submit" variant="outline-success">
//         Search
//       </Button>
//     </Form>
//   );
// };

// export default Search;
