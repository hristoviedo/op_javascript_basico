// $(selector).acción()

// $("li").hide();
// $("h1").hide();

// ejecuta cuando la página se carga por completo
$("document").ready(() => {});
$(() => {
  // $("#el-1").hide();
  $(".hide-btn").click(() => {
    // $("#title").hide();
    $("#title").fadeOut();
  });
  $(".show-btn").click(() => {
    // $("#title").show();
    $("#title").fadeIn();
  });
  $("li").dblclick(() => {
    $("#title").css({ color: "lightcoral" });
  });

  $(".new-element").click(() => {
    // $("#list").append("<li>Nuevo Elemento</li>");
    $("#list").prepend("<li>Nuevo Elemento</li>");
  });

  $("li").mouseenter((element) => {
    element.target.style.color = "orange";
  });

  $("li").mouseleave((element) => {
    element.target.style.color = "black";
  });
});
