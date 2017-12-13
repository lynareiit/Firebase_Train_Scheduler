// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBmSPjZD1mdQGTNir7XtWVanKnsdwdEgDQ",
    authDomain: "imonschedule.firebaseapp.com",
    databaseURL: "https://imonschedule.firebaseio.com",
    projectId: "imonschedule",
    storageBucket: "imonschedule.appspot.com",
    messagingSenderId: "758475291272"
  };
  firebase.initializeApp(config);

var trainData = firebase.database();

// add event
$("#submit").on("click", function(){

	var trainName = $("#train-title").val().trim()
	var destination = $("#destination").val().trim()
	var firstTrainTime = $("#first-train-time").val().trim()
	var frequency = $("#frequency").val().trim()

	var newTrain = {
		name: trainName,
		destination: destination,
		firstTrain: firstTrainTime,
		frequency: frequency,
	}

	// uploading train data to database
	trainData.ref().push(newTrain)
	alert("trainAdded")
	// print newTrain and new javascript variable
	console.log("newTrain", newTrain)
	$("#train-title").val("")
	$("#destination").val("")
	$("#first-train-time").val("")
	$("#frequency").val("")
	return false
})
// create a firebase event for adding trains to database and a row in the html when a user adds an entry


// store everything in a variable
// first train is later than the current time, set arrival for the first train
// calculate the minutes until the arrival using hardcore math
// to calculate the minute until arrival, take the current time in unix and subtract the first train time
// find the modulus (%) to calculate the arrival time, add the T minutes to the current time
// add each train data into the database data
// moment.js has time functions --> research