if (localStorage.getItem("viContent")) {
    var viObject = JSON.parse(localStorage.getItem("viContent"));
    var test = $("<a></a>").text(viObject.name).addClass("list-group-item list-title");
    $(".list-group").append(test);
    console.log(viObject);
}
else {
    $.ajax({
        url: "https://api.github.com/users/veysel",
        success: function (result) {
            var viObject = JSON.stringify({ name: result.name });
            var test = $("<a></a>").text(result.name).addClass("list-group-item list-title");
            $(".list-group").append(test);
            localStorage.setItem("viContent", viObject);
            console.log(viObject);
        }
    });
}