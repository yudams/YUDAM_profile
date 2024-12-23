// onload에 이렇게 넣으면 바로 실행된다.

// let flag2 = false
// window.addEventListener("scroll",function(){
//     setAnimationToTagVer(flag2)
// })


function setDefaultStyleVer(classname){
    let tagArray = document.querySelectorAll(classname)
    if(classname == ".moveUtoD"){
        tagArray.forEach(function(tag){
            tag.style.transition = `all 0.8s ease 0s`
            tag.style.transform = `translateY(-20px)`
            tag.style.opacity = `0`
        })
    }else if(classname == ".moveDtoU"){
        tagArray.forEach(function(tag){
            tag.style.transition = `all 0.8s ease 0s`
            tag.style.transform = `translateY(20px)`
            tag.style.opacity = `0`
        })
    }
}

function setAnimationToTagVer(flag){

    
    if(!flag){
        setDefaultStyleVer(".moveUtoD")
        setDefaultStyleVer(".moveDtoU")
    }
    


    let viewHeight = window.innerHeight // 현재 브라우저 화면의 높이를 계산
    

    function animationDetailsettingVer(classname){
        let tagArray = document.querySelectorAll(classname)

        tagArray.forEach(function(tag){
            let distance = tag.getBoundingClientRect().top // 각각 태그의 뷰포트 상단에서부터의 거리

            if(distance < viewHeight*0.8){
                tag.style.transform = `translateY(0)`
                tag.style.opacity = `1`
            }else{
                tag.style.transform = `translateY(${classname=="moveUtoD"?"-20":"20"}px)`
                tag.style.opacity = `0`
            }
        })
    }
    animationDetailsettingVer(".moveUtoD")
    animationDetailsettingVer(".moveDtoU")

    return true
}