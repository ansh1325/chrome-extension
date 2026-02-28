let myleads=[];
let inputel=document.getElementById("input-el")
let  inputbtn=document.getElementById("input-btn")
let ulel=document.getElementById("ul-el")

let deletebtn=document.getElementById("delete-btn")
let savetab=document.getElementById("tab-btn")
let getlocalstorage= JSON.parse(localStorage.getItem("myleads"))
const CLIPBOARD= document.getElementById("CLIPBOARD")

CLIPBOARD.addEventListener("click",function(){
    let clipboard_string=myleads.join("\n")
    if(myleads.length>0){
        navigator.clipboard.writeText(clipboard_string).then(()=>{
            let originaltext=CLIPBOARD.textContent;
            CLIPBOARD.textContent="COPIED!"
            CLIPBOARD.style.backgroundColor="#28a745"
            setTimeout(() => {
                CLIPBOARD.textContent=originaltext
                CLIPBOARD.style.backgroundColor="blue"
            }, 1000);
        })
    }
})
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    renderLeads()
})

savetab.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs) {
        myleads.push(tabs[0].url)
        renderLeads()
        localStorage.setItem("myleads",JSON.stringify(myleads))
    })
})
if (getlocalstorage) {
    myleads=getlocalstorage
    renderLeads()
}
function renderLeads(){
    let listItems='';

    for (let index = 0; index < myleads.length; index++) {

        listItems+=`<li><a target="_blank" href="${myleads[index]}"> ${myleads[index]} </a></li>`

    }
    ulel.innerHTML=listItems
}
inputbtn.addEventListener("click",function(){
    myleads.push(inputel.value)
    renderLeads()
    localStorage.setItem("myleads",JSON.stringify(myleads))
    inputel.value=''
})