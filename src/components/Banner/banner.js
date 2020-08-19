import React, {Component} from "react";
import { Carousel } from "antd-mobile";
import "./index.scss";
import axios from "axios";

// function Swiper() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetch = async () => {
//       const res = await axios.get("http://localhost:8080/home/swiper");
//       setData(res.data.body);
//     };
//     fetch();
//   }, []);

//   return (
//     <div className="swiper">
//       {data.length ? (
//         <Carousel>
//           {data.map((val) => (
//             <a
//               key={val.id}
//               href="http://www.alipay.com"
//               style={{ display: "inline-block", width: "100%", height: 212 }}
//             >
//               <img
//                 src={`http://localhost:8080${val.imgSrc}`}
//                 alt=""
//                 style={{ width: "100%", verticalAlign: "top" }}
//               />
//             </a>
//           ))}
//         </Carousel>
//       ) : null}
//     </div>
//   );
// }
// export default Swiper;
export default class Banner extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/home/swiper").then((res) => {
      //  console.log(res.data.body,11)
      this.setState({
        data: res.data.body
      });
    });
  }

  render() {
    return (
      <div className='swiper'>
      {this.state.data.length?  <Carousel autoplay infinite autoplayInterval={3000}>
        {this.state.data.map((val) => (
          <a
            key={val.id}
            href="http://www.alipay.com"
            style={{ display: "inline-block", width: "100%", height: 212 }}
          >
            <img
              src={`http://localhost:8080${val.imgSrc}`}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
            />
          </a>
        ))}
      </Carousel>:null}
      </div>
    );
  }
}
