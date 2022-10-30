console.log("monica beluci draging")

let imgBox = document.querySelector('.imgBox');
let whiteBoxs = document.querySelectorAll('.whiteBox');


// Drag start from here ===============================

imgBox.addEventListener('dragstart', (e)=>{
    console.log('drag start from here')
    // adding hold class in imgBox 
    e.target.className += " hold";
    setTimeout(() => {
    //  adding Hide class in imgBox so it hide when we drag it
        e.target.className +=  " hide"
        
    }, 0);
    // zero means setTimeout run in the end of all things happen
});

// Drag end and all process of shifting element to other box from here ===============================


imgBox.addEventListener('dragend', (e)=>{
    console.log('drag end here')
    // adding imgBox class at where dragend happen so nwe whiteBox append this class in drop event
    e.target.className = " imgBox";

});

// targeting all whiteBox or itreting and adding event listeners

for(let whiteBox of whiteBoxs){
      
    whiteBox.addEventListener('dragover', (e)=>{
        // so we able to dragover whiteBoxs
        e.preventDefault();
    console.log('dragover  here')
        
    })

    whiteBox.addEventListener('dragenter', (e)=>{
        console.log('dragenter  here')
    //   giving style class deshed in where we drag imgBox 
        e.target.className += " deshed"

    })

    whiteBox.addEventListener('dragleave', (e)=>{
        console.log('dragleave  here')
        // after imgBox leaveing a box to other box again changing class of box to whiteBox
        e.target.className = " whiteBox"

    })

    whiteBox.addEventListener('drop', (e)=>{
        console.log('drop  here')
        // append imgBox in new whiteBox where we droped imgBox 
        e.target.append(imgBox)
        // removeing deshed class or giving again whiteBox class ot droped imgBox whiteBox
        e.target.className = " whiteBox"

    })

}