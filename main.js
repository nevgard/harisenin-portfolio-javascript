const resume = document.getElementById("contentResume");
const home = document.getElementById("contentHome");
const contact = document.getElementById("contentContact");

// fungsi ketika tombol home di klik
function homeActive() {
  contact.classList.add("hidden");
  resume.classList.add("hidden");
  home.classList.remove("hidden");
}

// fungsi ketika tombol resume di klik
function resumeActive() {
  home.classList.add("hidden");
  contact.classList.add("hidden");
  resume.classList.remove("hidden");
}
// fungsi ketika tombol contact di klik
function contactActive() {
  contact.classList.remove("hidden");
  resume.classList.add("hidden");
  home.classList.add("hidden");
}

// const biodata = {
//   nama: "Ahmad Fahmi Faza",
//   skill: "Full Stack Developer",
//   contact: ["0851-5841-8944", "fahmifaza6@gmail.com", "Pekalongan, Indonesia"],
// };

// document.getElementById("showName").innerHTML = biodata.nama;
// document.getElementById("showSkill").innerHTML = biodata.skill;
// document.getElementById("showPhone").innerHTML = biodata.contact[0];
// document.getElementById("showEmail").innerHTML = biodata.contact[1];
// document.getElementById("showLocation").innerHTML = biodata.contact[2];

const biodataList = [
  {
    label: "Nama",
    value: "Ahmad Fahmi Faza",
    id: "showName",
  },
  {
    label: "Skill",
    value: "Full Stack Developer",
    id: "showSkill",
  },
  {
    label: "Phone",
    value: "0851-5841-8944",
    id: "showPhone",
  },
  {
    label: "Email",
    value: "fahmifaza6@gmail.com",
    id: "showEmail",
  },
  {
    label: "Address",
    value: "Pekalongan, Indonesia",
    id: "showAddress",
  },
];

// Melakukan perulangan untuk mengisi nilai ke elemen-elemen HTML
biodataList.forEach((item) => {
  const element = document.getElementById(item.id);
  if (element) {
    element.textContent = item.value;
  }
});
