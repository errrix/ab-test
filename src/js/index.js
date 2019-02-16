import '../scss/all.scss';
import $ from "jquery";

let data = [
    {
        img: 'https://www.ringcentral.com/content/dam/ringcentral/images/whyringcentral/casestudies/color/re-max-nexus-logo.png',
        title: 'RE/MAX Nexus',
        text: 'RE/MAX Nexus Innovates with Team Messaging and Collaboration',
        video: 'https://www.youtube.com/watch?v=7qUK9TRl02o'
    },
    {
        img: 'https://www.ringcentral.com/content/dam/ringcentral/images/whyringcentral/casestudies/color/msxi-logo.png',
        title: 'MSXI',
        text: 'A Platform for First-Class Customer Service',
        video: 'https://www.youtube.com/watch?v=Ej10mMruFP4'
    },
    {
        img: 'https://www.ringcentral.com/content/dam/ringcentral/images/whyringcentral/casestudies/brinker-page-logo.png',
        title: 'Brinker International',
        text: 'Brinker International has leveraged RingCentral platform data to help optimize the staffing at the restaurants',
        video: 'https://www.youtube.com/watch?v=ahm93twt0jU'
    },
    {
        img: 'https://www.ringcentral.com/content/dam/ringcentral/images/whyringcentral/casestudies/color/aseracare_card_logo.png',
        title: 'AseraCare',
        text: 'RingCentral Helps AseraCare Improve Customer Service Through Analytics-Driven Customer Engagement',
        video: 'https://www.youtube.com/watch?v=U6fmFoNo7WY'
    }
];

//append element in container
data.forEach(function (elem) {
    let videoId = elem.video.slice(elem.video.indexOf('?v=') + 3);
    $('.section-company').append(createCompanyItem(elem.img, elem.title, elem.text, videoId));
});

//i don't use template string because this does not supported on ie normally
//create element
function createCompanyItem(img, title, text, video) {
    return '<article class="companyitem">' +
        '<div class="companyitem__topwrapper">' +
        '<div class="companyitem__imagewrapper">' +
        '<img src="' + img + '" alt="' + title + '">' +
        '</div>' +
        '<h2 class="companyitem__title">' + title + '</h2>' +
        '<h6 class="companyitem__subtitle">' + text + '</h6>' +
        '</div>' +
        '<div class="companyitem__buttonwrapper">' +
        '<button type="button" data-href="' + video + '">Watch video</button>' +
        '</div>' +
        '</article>';
};

// open popup after clink watch video
$('.section-company').on('click', '.companyitem__buttonwrapper button', function () {
    //change src iframe
    $('.popup iframe').attr('src', 'https://www.youtube.com/embed/' + $(this).attr('data-href') + '?autoplay=1');
    $('.popup').removeClass('hide');
});

//close popup
$('.popup__buttonclose').on('click', function () {
    $(this).parents('.popup').addClass('hide');
    //clear src iframe
    $('.popup iframe').attr('src', '');
});

//This is the second solution with Google API methods, but this does not fit the condition of lazy loading.
//besides, ie is not supported normally


// let tag = document.createElement('script');
//
// tag.src = "https://www.youtube.com/iframe_api";
// let firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// let player;
//
// window.onYouTubeIframeAPIReady = function () {
//     player = new YT.Player('player', {
//         height: '360',
//         width: '640',
//     });
// };
//
// $('.section-company').on('click', '.companyitem__buttonwrapper button', function () {
//     $('.popup').removeClass('hide');
//     player.loadVideoById($(this).attr('data-href'));
// });
//
// $('.popup__buttonclose').on('click', function () {
//     $(this).parents('.popup').addClass('hide');
//     player.pauseVideo();
// });