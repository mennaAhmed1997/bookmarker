var subBtn = document.getElementById("subBtn");
var SiteName = document.getElementById("SiteName");
var SiteURL = document.getElementById("SiteURL");
var tableRow = document.getElementById("tableRow");
var redP = document.querySelector(".redP");
var redP2 = document.querySelector(".redP2");
redP.classList.replace("d-flex", "d-none");
redP2.classList.replace("d-flex", "d-none");
subBtn.addEventListener("click", addSite);
var bookArr;
(function () {
  if (localStorage.getItem("data") == null) {
    bookArr = [];
  } else {
    bookArr = JSON.parse(localStorage.getItem("data"));
  }
})();

function addSite() {
  if (siteName()&&siteLink()) {
    var bookMark = {
      sName: SiteName.value,
      sUrl: SiteURL.value,
    };
    bookArr.push(bookMark);
    localStorage.setItem("data", JSON.stringify(bookArr));
    display(bookArr);
    clearForm();
  }
}

function display(term) {
  var box = "";
  for (var i = 0; i < term.length; i++) {
    box += `
      <tr>
      
      <td>${term[i].sName}</td>
      <td><button class="btn btn-danger" onclick="deleteFun(${i})">delete</button></td>
      <td><button class="btn btn-info" onclick="visitSite(${i})">Visit</button></td>
     
    </tr>
      `;
  }
  tableRow.innerHTML = box;
}

function deleteFun(index) {
  bookArr.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(bookArr));
  console.log("ddd");
  display(bookArr);
}
function clearForm() {
  SiteName.value = "";
  SiteURL.value = "";
}
function visitSite(s) {
  window.open("http://google.com");
}
function siteName() {
  var regex = /^[A-Z]|[a-z]{3,20}$/;
  if (regex.test(SiteName.value)) {
    return true;
  } else {
    redP.classList.replace("d-none", "d-flex");
    redP.innerHTML = "Name is required";
    return false;
  }
}
function siteLink() {
  var regex2 = /^http: [A-Z]|[a-z]{3,20}$/;
  if (regex2.test(SiteURL.value)) {
    return true;
  } else {
    redP2.classList.replace("d-none", "d-flex");
    redP2.innerHTML = "Url Field is required";
    return false;
  }
}
