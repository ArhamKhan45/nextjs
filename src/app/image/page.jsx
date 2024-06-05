import Image from "next/image";
import img from "../../image/image1.jpg";
import img2 from "../../image/image3.jpg";
function Imagefunc() {
  const mainbox = {
    margin: " 0 auto",
    padding: "10px",
    border: "5px solid red",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    textAlign: "center",
  };
  console.log(img);
  return (
    <div style={mainbox}>
      <h1 className="">IMAGE OPTIMIZATION!</h1>
      <img src={img.src} alt="img1" style={{ width: "100%", height: "100%" }} />
      <img
        src={img2.src}
        alt="img2"
        style={{ width: "100%", height: "auto" }}
      />
      <Image
        src={img2.src}
        alt="img3"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        quality={50}
        sizes="100vw"
      />
    </div>
  );
}

export default Imagefunc;
