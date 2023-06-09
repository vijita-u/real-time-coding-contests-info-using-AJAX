const coding_images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1623520333087-62b8793e3d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxjb2Rpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxjb2Rpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
]


// Fetching API
let api = "https://kontests.net/api/v1/all";

let response = fetch(api);
response.then((value) => {
    return value.json();
}).then((value) => {
    let cardContents = "";
    for (contests of value) {
        let randIndex = Math.floor(Math.random() * coding_images.length);
        let image_url = coding_images[randIndex];
        cardContents += `<div class="card my-2 mx-2">
          <img src=${image_url} width="100%" height="200px" alt="Coding Picture">
          <h6 class="card-title">${contests["name"]}</h6>
          <p class="card-text">
            <p><b>Site</b>: ${contests["site"]}</p>
            <p><b>Contest Date</b>: ${(contests["start_time"].slice(8,10))}-${(contests["start_time"].slice(5,7))}-${(contests["start_time"].slice(0,4))}</p>
          </p>
          <a href="${contests["url"]}" class="btn btn-primary">Visit Contest</a>
        </div>
        </div>`

      //<p><b>Duration</b>: ${contests["duration"]} minutes</p>
      //<p><b>Start Time</b>: ${(contests["start_time"].slice(11,16))}</p>
      //<p><b>End Time</b>: ${(contests["end_time"].slice(11,16))}</p>

        if (contests["status"] == "BEFORE") {
            document.querySelector('#contest-cards').insertAdjacentHTML("afterbegin", cardContents);
        }
    }

})

// // Activating filter search
// const searchBox = document.querySelector('#search-box');

// searchBox.addEventListener('input', filterSearch);

// function filterSearch() {
//     const input = searchBox.value.toLowerCase();


// }