window.onload = function () {
    document.querySelector(".btnMoGnb").addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector("nav.mo").classList.add("on")
        return false
    })
    document.querySelector(".btnClose").addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector("nav.mo").classList.remove("on")
    })

    let moGnba = document.querySelectorAll(".moGnb a")
    for (let i = 0; i < moGnba.length; i++) {
        moGnba[i].addEventListener("click", function () {
            document.querySelector("nav.mo").classList.remove("on")
        })
    }



    let flag = false
    let flag2 = false

    window.addEventListener("scroll", function () {
        flag = setAnimationToTag(flag)
        flag2 = setAnimationToTagVer(flag2)
    })

    // 배너 슬라이드 기능

    let button_page = document.querySelectorAll(".pagination>span")
    let banner_train = document.querySelector(".train")

    function moveTrain(count){
        banner_train.style.transform = `translateX(${-(100/7) * count}%)`
    }

    function pagination(count){
        button_page.forEach(function(btn){
            btn.classList.remove("on")
        })
        button_page[count].classList.add("on")
    }

    button_page.forEach(function(btnpage,index){
        btnpage.addEventListener("click",function(){
            moveTrain(index)
            pagination(index)
        })
    })

}