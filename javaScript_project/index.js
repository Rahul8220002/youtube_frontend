let right_container = document.querySelector(".right_side");
let video_container = document.getElementById("video-tag");

let datafetch = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
  );
  let data = await response.json();
  console.log(data);

  DisplayDta(data);
};
datafetch();

function DisplayDta(data) {
  data.map((obj) => {
    let {
      title,
      thumbnailUrl,
      duration,
      uploadTime,
      views,
      author,
      videoUrl,
      description,
    } = obj;
    let setion = document.createElement("section");
    let video_div = document.createElement("div");
    let content_div = document.createElement("div");
    let imgtag = document.createElement("img");
    let heading = document.createElement("h1");
    let authorname = document.createElement("p");
    let view = document.createElement("p");
    imgtag.setAttribute("src", thumbnailUrl);
    setion.setAttribute("class", "aside-section");
    video_div.setAttribute("class", "video-div");
    content_div.setAttribute("class", "content-div");

    heading.innerText = title;
    authorname.innerText = author;
    view.innerText = `views ${views} .${uploadTime}`;

    right_container.append(setion);
    setion.append(video_div, content_div);
    video_div.append(imgtag);
    content_div.append(heading, authorname, view);

    setion.addEventListener("click", () => {
      video_container.setAttribute("src", videoUrl);
      video_container.setAttribute("autoplay", true);
    });
  });
}
