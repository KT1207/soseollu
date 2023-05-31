import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import Swal from "sweetalert2";
const AddNovel = () => {
  console.log("addNovel");
  const cols: number = 50;
  const rows: number = 40;
  const NovelNameRef = useRef<HTMLInputElement>();
  const NovelIntroduceRef = useRef<HTMLTextAreaElement>();
  const NovelImageRef = useRef<HTMLInputElement>();
  const [image, setImage] = useState(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const postNovel = () => {
    if (
      NovelImageRef.current.value !== (null || undefined) ||
      NovelIntroduceRef.current.value !== (null || undefined) ||
      NovelNameRef.current.value !== (null || undefined)
    ) {
      console.log("제목 : " + NovelNameRef.current.value);
      console.log(image.name);
      console.log("introduce : " + NovelIntroduceRef.current.value);
      console.log(NovelImageRef.current.files[0]);

      const formData = new FormData();
      formData.set(`file`, image);
      formData.set(`introduce`, NovelIntroduceRef.current.value);
      formData.set(`NovelName`, NovelNameRef.current.value);
      formData.set(
        `UserName`,
        localStorage.getItem(
          "4be7a0961679b6aadbc80fbf36c36b136cc1a784c829d5dc575d1812442edc9c"
        )
      );

      // formData.set(
      //   `id`,
      //   localStorage.getItem(
      //     "4be7a0961679b6aadbc80fbf36c36b136cc1a784c829d5dc575d1812442edc9c"
      //   )
      // );
      console.log(formData.get("file"));
      for (let key of formData.keys()) {
        console.log(key, ":", formData.get(key));
      }

      axios
        .post("http://localhost:8001/post/novelImg", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          Swal.fire({
            title: "새로운 소설을 만들었네요!",
            text: "늘 성실하게 연재 해주세요!",
            icon: "success",
          }).then((ss: any) => {
            /* Read more about isConfirmed, isDenied below */
            if (ss.isConfirmed) {
              window.location.href = "../";
            }
          });
        })
        .catch((err: any) => {
          console.log(err.response.data);
          console.error(err.response.status);
          Swal.fire("이미존재하는 제목입니다", "", "error");
        });
    } else {
      console.log("Fuck");
      console.log(NovelImageRef.current.value);
      console.log(NovelIntroduceRef.current.value);
      console.log(NovelNameRef.current.value);
    }
  };

  return (
    <div>
      <div>
        <div>소설 제목(최대 100자)</div>
        <input
          type="text"
          maxLength={100}
          placeholder="소설 제목을 써 주세요"
          ref={NovelNameRef}
        />
      </div>
      <div>
        <div>작품 소개(최대 2000자)</div>
        <textarea
          cols={cols}
          rows={rows}
          maxLength={2000}
          placeholder="소설 소개를 써주세요"
          ref={NovelIntroduceRef}
        ></textarea>
      </div>
      <div>
        <div>소설 표지</div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={NovelImageRef}
        />
        {image && (
          <img
            style={{ width: "300px", height: "300px" }}
            src={URL.createObjectURL(image)}
            alt="selected"
          />
        )}
      </div>
      <div>
        <button onClick={postNovel}>등록하기</button>
      </div>
    </div>
  );
};

export default AddNovel;
