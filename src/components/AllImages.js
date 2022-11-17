import React, { useEffect, useState } from "react";
import AxiosAPI from "./AxiosAPI";

const AllImages = () => {
  const getAllImages = () => {
    AxiosAPI.get("/")
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  };
  const [images, setImages] = useState([]);
  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <div className="mt-10  w-full relative top-0 h-[700px] left-[30px]">
      <div className=" h-full w-[5580px] relative">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};
function getMeta(url, callback) {
  const img = new Image();
  img.src = url;
  img.onload = function () {
    callback(this.width, this.height);
  };
}

const ImageGallery = ({ images }) => {
  let rows = [];
  var left1 = new Number(0);
  var left2 = new Number(0);
  var w1 = new Number(0);
  var w2 = new Number(0);
  for (let i = 0; i < images.length; i++) {
    const left = i % 2 === 0 ? left1 : left2;
    rows.push(
      <div
        style={{ left: left }}
        key={images[i].id}
        id={i % 2 === 0 ? `top${i}` : `bot${i}`}
        className={`h-auto absolute ${i % 2 === 0 ? "top-0" : "top-[350px]"} `}
      >
        <div className={`w-auto h-full relative overflow-hidden float-left`}>
          <img
            className="h-[350px] max-w-none float-left w-auto relative"
            src={images[i].image}
            alt="This is a terrible description!"
          />
        </div>
      </div>
    );
    getMeta(images[i].image, (width, height) => {
      console.log(width + " " + height);
      w1 = (350 * width)/height;
      w1 = w1.toFixed();
      console.log(w1);
      console.log(left1);
      left1 = i % 2 === 0 ? (left1 + w1) : left1;
      console.log(left1);
      left2 = i % 2 !== 0 ? (left2 + w1) : left1;
    });
  }
  return rows;
};
// const ImageGallery = ({images}) => {
//   let rows = [];
//   var {left1, left2, w1, w2} = 0;
//   for(let i =0; i < images.length; i ++){
//     rows.push(
//       <div id={i%2===0 ? `top${i}` : `bot${i}`} key={images[i].id} className={`h-auto absolute left-0 top-0`}>
//       <div  className={`w-auto h-full float-left relative overflow-hidden ${i%2===0 ? `left-[${left1}px] top-0` : `left-[${left2}px] top-[350px]` } `}>
//         <img
//           className="h-[350px] max-w-none"
//           src={images[i].image}
//           alt="This is a terrible description!"
//         />
//       </div>
//     </div>
//     )
//      w1 = i%2 ===0 ? document.getElementById(`top${i}`).clientWidth : w1;
//      w2 = i%2 !==0 ? document.getElementById(`bot${i}`).clientWidth : w2;
//     left1 = left1!==0 && i%2===0 ? left1+w1 : left1;
//     left2 = left2!==0 && i%2!==0 ? left2+w2 : left1;
//   }
//   return rows;
// };

export default AllImages;
