const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

const pinterestImg = document.querySelector(".pinterest-img");
const titleText = document.querySelector(".title-text").innerHTML;

function init(){


    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI(titleText);
    let postImg = encodeURI(pinterestImg.src);

    facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );

    twitterBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}&hashtags=KHOKA`
    );
    
    pinterestBtn.setAttribute(
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
    );

    linkedinBtn.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    whatsappBtn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
    );

}

init();