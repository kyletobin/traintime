var config = {
  apiKey: "AIzaSyDF7LCvLnZvt1iUoIdmwiukiEOABAIJ8Z4",
  authDomain: "traintime-c0b6b.firebaseapp.com",
  databaseURL: "https://traintime-c0b6b.firebaseio.com",
  projectId: "traintime-c0b6b",
  storageBucket: "traintime-c0b6b.appspot.com",
  messagingSenderId: "872081677737"
};
firebase.initializeApp(config);

var database = firebase.database();
var currentTime = moment();

database.ref().on("child_added", function (childSnap) {
  var name = childSnap.val().name;
  var destination = childSnap.val().destination;
  var firstTrain = childSnap.val().firstTrain;
  var frequency = childSnap.val().frequency;
  var min = childSnap.val().min;
  var next = childSnap.val().next;

  $("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
});

database.ref().on("value", function (snapshot) { });

$("#addTrainBtn").on("click", function () {

  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = $("#firstInput").val().trim();
  var frequency = $("#frequencyInput").val().trim();

  if (trainName == "") {
    alert('Enter a train name.');
    return false;
  }
  if (destination == "") {
    alert('Enter a destination.');
    return false;
  }
  if (firstTrain == "") {
    alert('Enter a first train time.');
    return false;
  }
  if (frequency == "") {
    alert('Enter a frequency');
    return false;
  }
