import { createContent } from ".";

function takeFetch(url) {
  fetch(`https://api.publicapis.org/${url}`)
    .then((res) => res.json())
    .then((res) => {
      switch (url) {
        case "entries":
          createContent(res.entries, "API");
          break;
        default:
          createContent(res);
          break;
      }
    })
    .catch((err) => console.log("ERROOR!!!", err));
}

export default takeFetch;
