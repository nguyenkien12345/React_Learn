import categoryApi from "api/categoryApi";
import React, { useEffect } from "react";
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import productApi from "./api/productApi";
import NotFound from "./components/NoutFound";
import CounterFeature from "./features/Counter";
import SongFeature from "./features/Song";
import TodoFeature from "./features/Todo";


// Styled Component (Viết css trong js. Nó sẽ tự tạo ra class unique cho mình)
// Tạo ra style cho thẻ h1
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color || 'green'};
`

function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log("Product List: ",productList);
    };
    fetchProducts();
  },[]);

  useEffect(() => {
    const fetchCategories = async () => {
      const params = {
        _limit: 10
      }
      const categoryList = await categoryApi.getAll(params);
      console.log("Category List: ",categoryList);
    };
    fetchCategories();
  },[])

  return (
      <div className="App">

          {/* Title chính là Styled Component ta định nghĩa ở trên */}
          <Title color="red">Heading</Title>
        
          <p><NavLink to='/todos'>Todos</NavLink></p>
          <p><NavLink to='/songs'>Songs</NavLink></p>

          <Switch>

            <Redirect from='/home' to='/' exact/>
            <Redirect from='/post-list/:postId' to='/posts/:postId' exact/>

            <Route path='/' component={CounterFeature} exact/>
            <Route path='/todos' component={TodoFeature}/>
            <Route path='/songs' component={SongFeature}/>

            <Route component={NotFound}/>

          </Switch>
      </div>
  );
}

export default App;
