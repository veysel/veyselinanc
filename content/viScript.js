var Tools = {
    StaticUserName: "veysel",
    AddName: function (tempName) {
        var newTag = $("<div></div>").text(tempName).addClass("list-group-item list-title").css("font-size", 10);
        $("#infoLeft").prepend(newTag);
    },
    AddCommitList: function (tempList) {
        tempList.forEach(function (element) {
            var newTag = $("<a></a>").text(element).addClass("list-group-item");
            $("#listRight").append(newTag);
        }, this);
    },
    AddImage: function (tempSrc) {
        var newTag = $("<img></img>").addClass("img-border").attr("src", tempSrc).css("width", 130);
        $("#imgLeft").append(newTag);
    },
    AddTitleList: function (tempList) {
        tempList.forEach(function (element) {
            var newTag = $("<a></a>").text(element.date + '  -  ' + element.titleText).addClass("list-group-item");
            newTag.attr("onclick", 'Tools.GoToContent(\'' + element.url + '\');');
            newTag.attr("href", "javascript:void(0)");
            $("#titleList").prepend(newTag);
        }, this);
    },
    ToggleListAndContent: function () {
        $("#titleList").slideToggle();
        $("#content").slideToggle();
    },
    GoToContent: function (tempUrl) {
        $("#contentText").load(tempUrl);
        this.ToggleListAndContent();
    }
}

if (localStorage.getItem("viContent")) {
    var viObject = JSON.parse(localStorage.getItem("viContent"));
    Tools.AddName(viObject.name);
    Tools.AddImage(viObject.userImage);
}
else {
    $.ajax({
        url: "https://api.github.com/users/" + Tools.StaticUserName,
        success: function (result) {
            Tools.AddName(result.name);
            Tools.AddImage(result.avatar_url);
            var viObject = JSON.stringify({ name: result.name, userImage: result.avatar_url });
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
        url: "https://api.github.com/users/" + Tools.StaticUserName + "/events",
        success: function (result) {
            var tempArray = [];
            for (var i = 0; i < 5; i++) {
                if (result[i].payload.commits) {
                    tempArray.push(result[i].payload.commits[0].message);
                }
                else {
                    tempArray.push("Type : " + result[i].type);
                }
            }
            Tools.AddCommitList(tempArray);
            var viObject = JSON.stringify({ list: tempArray });
            localStorage.setItem("viList", viObject);
        }
    });
}

$.ajax({
    contentType: "application/json",
    dataType: "json",
    url: "data/title-list.json",
    success: function (data) {
        Tools.AddTitleList(data);
    }
});

$("#content").toggle();

console.log("Test");