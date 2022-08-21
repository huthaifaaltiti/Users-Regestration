let filterBtn = document.querySelector(".filter-btn");
let filteredRow = document.querySelector(".filtered-row");

filterBtn.addEventListener("click", function () {
  filteredRow.classList.toggle("opacity");
});

let addUserBtn = document.querySelector(".add-account-btn");
let userFormContainer = document.querySelector(".add-user-form-container");
let closeFormBtn = document.querySelector(".close-form-btn");
let submitUserForm = document.querySelector(".submit-user-form");
let userCardsContainer = document.querySelector(".cards-container-de");
let userForm = document.querySelector(".user-form");
let userInpPic = document.querySelector(".input-image input");

addUserBtn.addEventListener("click", function () {
  userFormContainer.classList.toggle("close");
});

closeFormBtn.addEventListener("click", function () {
  userFormContainer.classList.toggle("close");
});

userInpPic.addEventListener("change", function () {
  console.log(this.files);
  let reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("recentImage", reader.result);
  });
  reader.readAsDataURL(this.files[0]);
});

submitUserForm.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  newDiv.classList.add("col", "col-12", "col-lg-12", "w-25");

  let recentImageURL = localStorage.getItem("recentImage");

  newDiv.innerHTML = `
  <div class="card">
    <div class="card-header row p-2 m-0 card-top-de">
      <div class="col-sm-3 card-image-container">
        <img
          src="${recentImageURL}"
          alt=""
          class="card-img card-img-de" type=""
        />
      </div>

      <div class="col d-flex flex-column justify-content-center">
        <h5 class="card-title card-title-de">
          <span class="first-name">${userForm.children[1].children[1].value}</span>
          <span class="last-name">${userForm.children[2].children[1].value}</span>
        </h5>

        <h6 class="card-subtitle mb-2 text-muted">
          Membership

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-patch-check"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path
              d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"
            />
          </svg>
        </h6>
      </div>
    </div>

    <div class="card-body card-body-de d-flex flex-column">
      <h5 class="card-title">Product Title</h5>
      <p class="card-text card-text-de">
        ${userForm.children[4].children[1].value}
      </p>

      <div class="row text-uppercase mt-auto">
        <div
          class="col col-12 d-flex gap-2 btn-group btn-group-justified"
        >
          <a href="#" class="btn btn-warning rounded">Archive</a>
          <a href="#" class="btn btn-danger rounded">Delete</a>
        </div>

        <div class="col col-12 btn-group btn-group-justified mt-2">
          <a href="#" class="btn btn-secondary">Edit</a>
        </div>
      </div>
    </div>
  </div>`;

  userCardsContainer.appendChild(newDiv);
});


