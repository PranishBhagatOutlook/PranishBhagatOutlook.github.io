function getYoutubeViewCount() {
  const url =
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCQYQLM5wUlRdOOWRINuFzPw&";

  fetch(url)
    .then((response) => {
      response.json().then((data) => {
        // console.log(data.items[0].statistics.viewCount);
        document.getElementById("youtubeViewCountId").innerHTML =
          data.items[0].statistics.viewCount;
      });
    })
    .catch("ViewCount not found");
}
