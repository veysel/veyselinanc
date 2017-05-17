var Tools = {
    AddName: function (tempName) {
        var newTag = $("<div></div>").text(tempName).addClass("list-group-item list-title").css("font-size", 10);
        $("#infoLeft").prepend(newTag);
    }
}

if (localStorage.getItem("viContent")) {
    var viObject = JSON.parse(localStorage.getItem("viContent"));
    Tools.AddName(viObject.name);
}
else {
    $.ajax({
        url: "https://api.github.com/users/veysel",
        success: function (result) {
            Tools.AddName(result.name);
            var viObject = JSON.stringify({ name: result.name });
            localStorage.setItem("viContent", viObject);
        }
    });
}