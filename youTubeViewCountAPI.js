import axios from "axios";

const api = axios.create();

function execute() {
    return gapi.client.youtube.channels.list({
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "id": [
            "UCQYQLM5wUlRdOOWRINuFzPw"
        ]
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}
