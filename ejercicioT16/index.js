const paragraphs = document.querySelectorAll(".paragraph");

const sections = document.querySelectorAll(".section");

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("dragstart", (e) => {
    paragraph.classList.add("dragging");
    e.dataTransfer.setData("idParagraph", paragraph.id);
  });

  paragraph.addEventListener("dragend", (e) => {
    paragraph.classList.remove("dragging");
  });
});

sections.forEach((section) => {
  section.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  section.addEventListener("drop", (e) => {
    const id = e.dataTransfer.getData("idParagraph");
    const paragraph = document.getElementById(id);
    section.appendChild(paragraph);
  });
});

const recycleBin = document.querySelector("#recycleBin");

recycleBin.addEventListener("dragover", (e) => {
  e.preventDefault();
  recycleBin.classList.add("removing");
});

recycleBin.addEventListener("dragleave", (e) => {
  recycleBin.classList.remove("removing");
});

recycleBin.addEventListener("drop", (e) => {
  const idParagraph = e.dataTransfer.getData("idParagraph");
  document.getElementById(idParagraph).remove();
  recycleBin.classList.remove("removing")
});
