var Tools = {
    AddName: function (tempName) {
        var newTag = $("<div></div>").text(tempName).addClass("list-group-item list-title").css("font-size", 10);
        $("#infoLeft").prepend(newTag);
    },
    AddCommitList: function (tempList) {
        tempList.forEach(function (element) {
            var newTag = $("<a></a>").text(element).addClass("list-group-item");
            $("#listRight").append(newTag);
        }, this);
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

if (localStorage.getItem("viList")) {
    var viObject = JSON.parse(localStorage.getItem("viList"));
    Tools.AddCommitList(viObject.list);
}
else {
    $.ajax({
        url: "https://api.github.com/users/veysel/events",
        success: function (result) {
            var tempArray = [];
            for (var i = 0; i < 5; i++) {
                tempArray.push(result[i].payload.commits[0].message);
            }
            Tools.AddCommitList(tempArray);
            var viObject = JSON.stringify({ list: tempArray });
            localStorage.setItem("viList", viObject);
        }
    });
}