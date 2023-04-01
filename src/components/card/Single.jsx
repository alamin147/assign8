import React, { useState } from "react";

const Single = (props) => {
  const [totalTime, setTotalTime] = useState(0);
  const {
    authorName,
    authorImg,
    blogTitle,
    blogCoverImg,
    readTime,
    publishDate,
  } = props.info;

  const addToCart = props.addToCart;
  
  

// const time = () => {
//  let totalTime = 0;

//  totalTime = totalTime + readTime;

//  console.log(totalTime);

// }


  return (
    <>
      <div className="card my-5" style={{ width: "45rem" }}>
        <img className="card-img-top" src={blogCoverImg} alt="" />
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center gap-3">
            <div className="">
              <img
                className="img-fluid img-thumbnail headImg rounded-circle"
                src={authorImg}
                alt=""
              />
            </div>
            <div>
              <p>{authorName}</p>
              <p className="">{publishDate}</p>
            </div>
          </div>
          <div className="">
            <div>{readTime} mins</div>
            <div>
              <svg
                onClick={() => addToCart(props.info)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <p className="fw-bold ms-3">{blogTitle}</p>
          <p>
            <button
              type="button"
              className="ms-1 btn btn-link"
              onClick={()=>setTotalTime(readTime+totalTime)}>
              Mark as read
            </button>
            
          </p>
        </div>
      </div>
    </>
  );
};

export default Single;
