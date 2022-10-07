import React, { useEffect } from 'react';
import {useSelector, useDispatch}  from "react-redux";
import { fetchPosts } from './PostSlice';

const PostView = () => {
      const {isLoading, posts, error} = useSelector( (state) => state.posts);
      const dispatch = useDispatch();

      useEffect( () => {
            dispatch(fetchPosts())
      }, [])
      return (
            <div>
                  ----------------------------------------------------
                  ----------------------------------------------------
                  { isLoading && <h3>Loading...</h3>}
                  { error && <h3>{error}</h3>}
                 <section style={{ display: 'grid', gridGap: "0.5rem", padding: "1rem"}}>
                        {
                              posts && posts?.map( post => {
                                    const { id, title, body } = post;
                                    return <article key={id} style={{color: "white", backgroundColor: "#293462", padding: "0.5rem"}}>
                                          <h5>{title}</h5>
                                          <p>{body}</p>
                                    </article>
                              })
                        }
                 </section>
            </div>
      );
};

export default PostView;