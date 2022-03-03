function getYoutubeViewCount() {
  console.log("test");

  fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCQYQLM5wUlRdOOWRINuFzPw&key=AIzaSyCR6-R-1zv0N_kxNw_LQ3NR2rhXXF7_JEk"
  )
    .then((response) => {
      response.json().then((data) => {
        // console.log(data.items[0].statistics.viewCount);
        document.getElementById("youtubeViewCountId").innerHTML =
          data.items[0].statistics.viewCount;
      });
    })
    .catch("ViewCount not found");
}
