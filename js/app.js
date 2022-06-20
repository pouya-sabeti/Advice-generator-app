function adv() {
    document.querySelector(".box h3").innerHTML = "LOADING...";
    let request = new XMLHttpRequest;

    request.open("GET", "https://api.adviceslip.com/advice");

    request.onreadystatechange = function () {
        if (request.readyState == 4 && this.status == 200) {
            let adv_api = this.responseText;
            adv_api = JSON.parse(adv_api);
            var id = adv_api.slip.id;
            var text = adv_api.slip.advice;
            document.querySelector(".box p span").innerHTML = "#" + id;
            document.querySelector(".box h3").innerHTML = text;
        }
    }
    request.send();
}
adv();