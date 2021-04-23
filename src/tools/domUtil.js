export const setDocumentTitle = function(title) {
  document.title = title;
  const ua = navigator.userAgent;
  const regex = /\bMicroMessenger\/([\d\.]+)/;
  if(regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement("iframe");
    i.src = "/favicon.png";
    i.style.display = "none";
    i.onload = function() {
      setTimeout(() => {
        i.remove();
      },9 );
    };
    document.body.appendChild(i);
  }
};
const APP_NAME = process.env.REACT_APP_APP_NAME;
export const domTitle = APP_NAME;
