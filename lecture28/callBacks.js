
let callback = (arg) => {
    console.log(arg);
}


const loadScript = (src, callback) => {
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("Akram")
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css", callback)


