
const customloader ={
    title: "Please Wait...",
    showLoader:function() {
        // 
        let body = document.getElementsByTagName('body')
        let div = document.createElement('div')
        div.innerHTML = `<div id="loader-animation-loading" data-v-app=""><div class="loader-animation-loading fullscreen flex flex-center z-max"><div class="loader-animation-loading__backdrop"></div><div class="loader-animation-loading__box column items-center bg-grey-2 text-grey-9"><svg class="loader-spinner text-primary loader-spinner-mat loader-animation-loading__spinner" width="80" height="80" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg><div class="loader-animation-loading__message">${this.title}</div></div></div><!----></div>
   <style>
*,*:before,*:after{box-sizing:inherit;-webkit-tap-highlight-color:transparent;-moz-tap-highlight-color:transparent;}
svg:not(:root){overflow:hidden;}
.loader-spinner{vertical-align:middle;}
.loader-spinner-mat{animation:q-spin 2s linear infinite;transform-origin:center center;}
.loader-spinner-mat .path{stroke-dasharray:1, 200 ;stroke-dashoffset:0 ;animation:q-mat-dash 1.5s ease-in-out infinite;}
.loader-animation-loading{color:#000;position:fixed!important;}
.loader-animation-loading__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0.5;z-index:-1;background-color:#000;transition:background-color 0.28s;}
.loader-animation-loading__box{border-radius:4px;padding:18px;color:#fff;max-width:450px;}
.loader-animation-loading__message{margin:40px 20px 0;text-align:center;}
.text-primary{color: #000!important;}
.text-grey-9{color:#424242!important;}
.bg-grey-2{background:#f5f5f5!important;}
.column,.flex{display:flex;flex-wrap:wrap;}
.column{flex-direction:column;}
.flex-center{justify-content:center;}
.items-center,.flex-center{align-items:center;}
.fullscreen{position:fixed;}
.fullscreen{z-index:6000;border-radius:0!important;max-width:100vw;max-height:100vh;}
.fullscreen{top:0;right:0;bottom:0;left:0;}
.z-max{z-index:9998!important;}
/*! CSS Used from: Embedded */
::selection{color:#4f005e;background:rgba(79, 0, 94, 0.1);}
#customLoader{z-index:100000000000000020;}
.loader-animation-loading__box{position:relative;}
.loaderlogo{position:absolute;width:80px;height:80px;}
@keyframes q-spin{0%{transform:rotate3d(0, 0, 1, 0deg) ;}25%{transform:rotate3d(0, 0, 1, 90deg) ;}50%{transform:rotate3d(0, 0, 1, 180deg) ;}75%{transform:rotate3d(0, 0, 1, 270deg) ;}100%{transform:rotate3d(0, 0, 1, 359deg) ;}}
@keyframes q-mat-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0;}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px;}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px;}}
</style>`
        div.id = 'customLoader'
        div.className = 'fullscreen'
        body[0].appendChild(div)
        body[0].classList.add('q-body--force-scrollbar-y')
        body[0].classList.add('q-body--prevent-scroll')
    },
    hideLoader:function() {
        // 
        let div = document.getElementById('customLoader')
        div.remove()
        document.body.classList.remove('q-body--prevent-scroll')
        document.body.classList.remove('q-body--force-scrollbar-y')
    }
};
module.exports = customloader;