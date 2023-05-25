import axios from "axios";
import { deflate } from "zlib";

const myNovels = () => {
  axios
    .get("http://localhost:9090")
    .then((res) => {
      console.log(res.data.data);
      console.log(res.data);
      if (res.data.data === (null || undefined)) {
        return null;
      }
      return res.data.data;
    })
    .catch((err) => {
      console.log("Err " + err);
      console.log("errData : " + err.data);
    });
};
export { myNovels };
