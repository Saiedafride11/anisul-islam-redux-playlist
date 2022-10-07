import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/TodosAction';

const Todos = () => {
      const { isLoading, todos, error } = useSelector( state => state);
      const dispatch = useDispatch();
      useEffect( () => {
            dispatch(getAllTodos());
      }, [])
      return (
            <div>
                  <h1>Todos App</h1>
                  {  isLoading && <h3>Loading ...</h3> }
                  {  error && <h3>{error.message}</h3> }
                  
                  <section style={{ display: 'grid', gridGap: "0.5rem", padding: "1rem"}}>
                        { 
                              todos &&
                                    todos?.map( todo => {
                                          const {id, title} = todo;
                                          return (
                                                <article key={id} style={{color: "white", backgroundColor: "#293462", padding: "0.5rem"}}>
                                                      <h4>{id}</h4>
                                                      <p>{title}</p>
                                                </article>
                                          )
                                    })  
                        }
                  </section>
            </div>
      );
};

export default Todos;