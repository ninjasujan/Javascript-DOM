

const banner = document.querySelector('#page-banner');

console.log("#page-banner Node type: ", banner.nodeType);
console.log("#page-banner Node Name: ", banner.nodeName);

console.log("is #page-banner has child node", banner.hasChildNodes());

const bannerCopy = banner.cloneNode(true);
console.log(bannerCopy);

/*
    'true' - helps to create a deep copy by coping all it's child node as well
    'false' - inverse of true
*/


