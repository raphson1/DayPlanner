console.log("test")

// moment

function todaysDate (){
    var today = moment().format("MMM Do YYYY, hh:mm");
    $("#currentDay").text(today)
}
todaysDate()

var myAgenda = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id:"1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: "",
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: "",

    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: "",
    },
    {
        id: "4",
        hour: "1",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "2",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "3",
        time: "14",
        meridiem: "pm",
        reminder: "",

    },
    {
        id: "7",
        hour: "4",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "5",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    
]
