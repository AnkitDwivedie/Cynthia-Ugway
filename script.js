const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInout
    })
    .to(".boundingelem",{
        y: 0,
        duration:2,
        stagger:.2,
        ease:Expo.easeInout
    })
    .to("#herofooter",{
        y: -10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInout
    })
    
}
function circlechaptakaro(){
        var xscale = 1;
        var yscale = 1;
        var xpre = 0;
        var ypre = 0;
    window,addEventListener("mousemove",function(dets){
        this.clearTimeout(timeout);
        xscale =  gsap.utils.clamp(.8,1.2,dets.clientX - xpre);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - ypre);

        xpre = dets.clientX;
        ypre = dets.clientY;

        CircleMouseFollower(xscale,yscale);
    timeout =  this.setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale( ${xscale}, ${yscale}) `;
     },100)
      
    })
}
circlechaptakaro();
function CircleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale( ${xscale}, ${yscale}) `;
    })
}
CircleMouseFollower();
firstPageAnim();

// document.querySelectorAll(".elem").forEach(function(elem))
// {
//     elem.addEventListener("mousemove",function(dets){
//         var diff = dets.clientY - elem.getBoundingClientRect().top;
//         rotate = dets
//     gsap.to(elem.querySelector("img"),{
//         opacity:0,
//         ease: Power3,
//        top: diff,
//        left:dets.clientX,
//        rotate:gsap.utils.clamp(-20,20,diffrot*0.5),
//     });
//     });
// }