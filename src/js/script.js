// ambil semua input
const inputBox = document.getElementById("text-box");
const listcontainer = document.getElementById("list-container");
const alert = document.getElementById("alert");
const alert2 = document.getElementById("alert2");

// fungsi untuk menambahkan data pada Li
function addTask() {
  // pengecekan jika input adalah 0 atau undefined
  if ((inputBox.value == 0) | undefined) {
    alert.classList.remove("hidden");
    setTimeout(() => {
      alert.classList.add("hidden");
      // alert akan hilang ketika lebih dari 3 detik
    }, 3000);
  } else if (inputBox.value.length > 18) {
    alert2.classList.remove("hidden");
    setTimeout(() => {
      alert2.classList.add("hidden");
      // alert akan hilang ketika lebih dari 3 detik
    }, 3000);
  } else {
      // membuat Li untuk ditambahkan pada HTML
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listcontainer.appendChild(li);

      // membuat Span untuk ditambahkan pada HTML
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  }
  // inputBox.value = "";
  // jika semua sudah dicek maka jalankan fungsi save
  save();
}

// melihat jika ada yang baru pada ListContainer maka akan membuat Li dan span pada setiap Li
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.classList.toggle("unchecked");
      e.target.parentNode.remove();
      save();
    }
  },
  false
);

// fungsi untuk menyimpan pada local storage
function save() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

// fungsi untuk menampilkan yang ada pada local storage
function showData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

// jalanakan fungsi showData
showData();
