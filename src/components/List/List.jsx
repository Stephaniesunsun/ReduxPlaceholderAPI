import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../redux/actions/Actions";

const List = ({ loading, posts, fetchPost }) => {
  useEffect(() => {
    fetchPost();
  }, []);

  return loading ? (
    <h2>loading</h2>
  ) : (
    <div>
      <h2>posts:</h2>
      <div>
        {posts.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  //can use selector
  return {
    posts: state.posts, //return a property of state
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPost()),
  };
}; //be called by the action name

export default connect(mapStateToProps, mapDispatchToProps)(List);
