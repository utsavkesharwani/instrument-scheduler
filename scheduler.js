var date = document.getElementById("startdt").value.replace(/-/g, "");
var time = document.getElementById("timeslot").value;

var trEles = Array.prototype.slice.call(document.getElementsByTagName('tr'));
var userNameRow = trEles.filter(function (ele) { return ele.innerHTML.match(/User Name/) })[1];
var phoneNoRow = trEles.filter(function (ele) { return ele.innerHTML.match(/Phone No\./) })[1];
var exptTypeRow = trEles.filter(function (ele) { return ele.innerHTML.match(/Experiment Type/) })[1];

var userName = userNameRow.innerHTML.match(/<td bgcolor="#CCFFFF">(.*)<\/td>/)[1];
var phoneNo = phoneNoRow.innerHTML.match(/<td bgcolor="#CCFFFF">(.*)<\/td>/)[1];
var exptType = exptTypeRow.innerHTML.match(/<td bgcolor="#CCFFFF">(.*)<\/td>/)[1];

if (date === "") {
  alert("Please select date");
} else if (time === "") {
  alert("Please select time");
} else {
  var url = "http://www.google.com/calendar/event?action=TEMPLATE";
  url += "&text=" + titleize(userName) + " (" + phoneNo + ")";
  if (exptType.toLowerCase().match(/sorting/)) {
    url += " (sorting)";
  }

  if (time.replace(/\s/g, "") === "2:30-4:30") {
    url += "&dates=" + date + "T143000/" + date + "T163000";
  } else {
    url += "&dates=" + date + "T110000/" + date + "T130000";
  }

  url += "&details=";
  url += "&src=huj45girg8pbqclcmfebo930p8%40group.calendar.google.com";
  window.open(url);
}

function titleize(sentence) {
  if(!sentence.split) return sentence;
  var _titleizeWord = function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      },
      result = [];
  sentence.split(" ").forEach(function(w) {
      result.push(_titleizeWord(w));
  });
  return result.join(" ");
}
