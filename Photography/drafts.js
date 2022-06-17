//selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon");
currentImg = previewBox.querySelector(".current-img");
totalImg = previewBox.querySelector(".total-img");
shadow = document.querySelector(".shadow")


window.onload = ()=> { //once window loaded
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; 
        let newIndex = i;//passing i value to newIndex variable
        let clickImgIndex;
        gallery[i].onclick = ()=> {
            clickImgIndex = newIndex;
           console.log(i);
         function preview() {
             currentImg.textcontent = newIndex + 1;
             let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
             previewImg.src = selectedImgUrl; //passing user clicked imgurl to previewImg source
          
         }

         //previous and next button
         const prevBtn = document.querySelector(".prev");
         const nextBtn = document.querySelector(".next");
        if(newIndex == 0) {
            prevBtn.style.display = "none";
        }
        if(newIndex >= gallery.length - 1){
         nextBtn.style.display ="none";   
        }

         prevBtn.onclick = ()=>{
             newIndex--; //decrement newIndexValue
            if(newIndex == 0) {
                preview();
                prevBtn.style.display = "none";
            }
            else {
                preview();
                nextBtn.style.display = "block";

            }
        }
       nextBtn.onclick = ()=>{
            newIndex++; //increment newIndexValue
           if(newIndex >= gallery.length - 1) {
               preview();
              nextBtn.style.display = "none";
           }
           else {
               preview();
               prevBtn.style.display="block"

           }
       }


         preview(); //calling above function
         previewBox.classList.add("show");
         shadow.style.display="block";
         document.querySelector("body").style.overflow =" hidden"

         closeIcon.onclick = () => {   
            newIndex = clickImgIndex;
             prevBtn.style.display = "block";
             nextBtn.style.display = "block";
             previewBox.classList.remove("show");
             shadow.style.display ="none";
         }
        }
    }
}
    let nav = document.querySelector('nav');
    let dropdown = nav.querySelector('.dropdown');
    let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
    let navToggle = nav.querySelector("[data-action='nav-toggle']");
   
    dropdownToggle.addEventListener('click', () => {
     if (dropdown.classList.contains('show')) {
       dropdown.classList.remove('show');
     }
      else {
        dropdown.classList.add('show');
     }
   })
  
   navToggle.addEventListener('click', () => {
     if (nav.classList.contains('opened')) {
       nav.classList.remove('opened');
     }
      else {
       nav.classList.add('opened');
     }
   })