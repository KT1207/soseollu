import axios from "axios";
const myNovels = () => {
  axios
    .get("http://localhost:8001/")
    .then((res) => {
      console.log(res.data);
      console.log(res.data);

      if (res.data === (null || undefined)) {
        return "mynovelsfail";
      }
      return res.data;
    })
    .catch((err) => {
      console.log("Err " + err);
      console.log("errData : " + err.data);
    });
};
export { myNovels };
