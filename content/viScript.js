var Tools = {
    AddName: function (tempName) {
        var newTag = $("<a></a>").text(tempName).addClass("list-group-item list-title");
        $(".list-group").append(newTag);
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
            var viObject = JSON.stringify({ name: result.name });
            Tools.AddName(result.name);
            localStorage.setItem("viContent", viObject);
        }
    });
}