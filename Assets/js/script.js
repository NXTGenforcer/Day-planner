var tableEl = $(".table");
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var currentTime = moment().hour();
$(document).ready(function () {
  function init() {
    for (let i = 0; i < times.length; i++) {
      var element = times[i];
      var elementTime = parseInt(element.slice(0, -2));
      var classString = "";
      var storage = localStorage.getItem(element);
      var textAreaString = "";
      if (elementTime < 9) {
        elementTime = elementTime + 12;
      }
      if (elementTime < currentTime) {
        classString = "past";
      } else if (elementTime === currentTime) {
        classString = "present";
      } else {
        classString = "future";
      }
      if (storage) {
        textAreaString = storage;
      }
      tableEl.append(
        $(
          `<tr>
          <th scope="row" >${element}</th>
            <td><textarea class="textbox ${classString}" name="textarea" id="${element}" cols="100" rows="1">${textAreaString}</textarea></td>
            <td><button class="far fa-save saveBtn" id="${element}"></button></td></tr>`
        )
      );
    }
  }
  init();
  $(".fa-save").on("click", function () {
    var id = $(this).attr("id");
    var taskText = $(this).parent().siblings("td").children(".textbox").val();
    localStorage.setItem(id, taskText);
    init();
  });
});
