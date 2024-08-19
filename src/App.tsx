import { useState } from "react";
import ReactPlayer from "react-player";

function validURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function App() {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/watch?v=wIyHSOugGGw"
  );

  const videoLinkHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVideoLink(e.target.value);
  };

  const isValidUrl = validURL(videoLink);
  console.log(isValidUrl);

  return (
    <div className="flex flex-col pt-4 items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <h1 className="font-bold text-xl py-2 uppercase">React Video</h1>
      <input
        className={`p-2 mb-4 rounded-xl ${isValidUrl ? "" : "text-red-500"}`}
        onChange={videoLinkHandler}
        value={videoLink}
        placeholder="Enter valid url"
      />

      {!videoLink && (
        <div className="flex items-center justify-center">
          <p className="font-bold text-lg">
            Please provide a valid Url for using this React Player
          </p>
        </div>
      )}
      {videoLink && <ReactPlayer controls url={videoLink} />}
    </div>
  );
}

export default App;
