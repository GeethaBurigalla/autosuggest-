var users=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"/images/john.png",
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"/images/jane.png",
    }
]

var curId = 0;

function toggle() {
    // toggle curid from 0->1 & 1-> 0
    curId = (curId + 1) % 2;
    var user = users[curId];
    //toggle the rendered user detail
    document.getElementById("user-img").src = user.image;
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;
}