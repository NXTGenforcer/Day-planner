var tableEl = $(".table");
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var btn = $(".saveBtn");
var textArea = $(".textarea");

$(document).ready(function () {
  for (let i = 0; i < times.length; i++) {
    var element = times[i];
    console.log(element);
    tableEl.append(
      $(
        `<tr>
          <th scope="row">${element}</th>
             <td><textarea class="textarea" name="textarea" id="textarea" cols="100" rows="1"></textarea></td>
             <td><button class="saveBtn">Save</button></td></tr>`
      )
    );
  }
});

btn.addEventLisenter(function () {
  textArea.text.value.json();
});
