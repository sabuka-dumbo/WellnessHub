const navboard = document.getElementById("navboard");
const nav_div = document.getElementById("nav-div");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");

const burger = document.getElementById("burger");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

let cooldown = 0;
let open = 0


burger.addEventListener("click", function() {
    if (cooldown == 0) {
        cooldown = 1;

        if (open == 0) {
            open = 1;

            span1.style.animation = "span1_open 1s ease";
            span2.style.animation = "span2_open 1s ease";
            span3.style.animation = "span3_open 1s ease";

            navboard.style.animation = "navboard_open 1s ease";

            span1.addEventListener("animationend", function() {
                span1.style.animation = '';
                span2.style.animation = '';
                span3.style.animation = '';
                
                navboard.style.animation = '';

                navboard.style.left = "0%"

                span2.style.opacity = "0";

                span1.style.top = "13px";
                span3.style.top = "-13px";

                span1.style.rotate = "45deg";
                span3.style.rotate = "-45deg";

                cooldown = 0;
            })
        } else {
            open = 0;

            span1.style.animation = "span1_close 1s ease";
            span2.style.animation = "span2_close 1s ease";
            span3.style.animation = "span3_close 1s ease";

            navboard.style.animation = "navboard_close 1s ease";

            span1.addEventListener("animationend", function() {
                span1.style.animation = '';
                span2.style.animation = '';
                span3.style.animation = '';

                navboard.style.animation = '';

                navboard.style.left = "-100%"

                span2.style.opacity = "1";

                span1.style.top = "0px";
                span3.style.top = "0px";

                span1.style.rotate = "0deg";
                span3.style.rotate = "0deg";

                cooldown = 0;
            })
        }
    }
})
