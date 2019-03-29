import React, { Component } from "react";
import Post from "./Post";
import './Feed.css';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgArr: [
        {
          id: 1,
          url:
            "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          comment: "Landscape"
        },
        {
          id: 2,
          url:
            "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          comment: "Green"
        }
      ]
      // one: {
      //   url:
      //     "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      //   comment: "Landscape"
      // },
      // two: {
      //   url:
      //     "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      //   comment: "Green"
      // }
    };

    this.urlInput = React.createRef();
    this.commentInput = React.createRef();
  }

  submit = () => {
    // const key = Math.floor(1000 * Math.random()).toString();
    // const obj = {};
    // obj[key] = {
    //   url: this.urlInput.current.value,
    //   comment: this.commentInput.current.value
    // };
    // this.setState(obj);
    const key = Math.floor(1000 * Math.random());
    const obj = {};
    const imgObj = {
      id: key,
      url: this.urlInput.current.value,
      comment: this.commentInput.current.value
    };
    const arrNew = this.state.imgArr;
    arrNew.push(imgObj);
    obj.imgArr = arrNew;
    this.setState(obj);
    this.commentInput.current.value = this.urlInput.current.value = "";
  }

  render() {
    return (
      <div className="App">
        <div className="feed">
          <div className="inputs">
            <div className="row">
              <input
                ref={this.urlInput}
                placeholder="Enter URL"
                className="input"
              />
            </div>
            <div className="row">
              <input
                placeholder="Title"
                ref={this.commentInput}
                className="input margin2px"
              />
              <input
                value="New Post"
                type="submit"
                onClick={this.submit}
              />
            </div>
          </div>
          {/* {Object.keys(this.state).map(key => (
            <Post key={key} {...this.state[key]} />
          ))} */}
          {this.state.imgArr.map(img => (
            <Post key={img.id} {...img} />
          ))}
        </div>
      </div>
    );
  }
}

export default Feed;
