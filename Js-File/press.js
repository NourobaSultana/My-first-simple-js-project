document.getElementById('discover').addEventListener('click',
    function(event){
        console.log("toma");
        event.preventDefault();
        window.location.href="./main.html"
        console.log("toma");
    }
)

   // back btn click


const d = new Date();
document.getElementById('date').innerText=  d.toDateString();
// console.log(object);



// disable 1
document.getElementById('complete-btn-one').addEventListener('click', function()
{
    const button = document.getElementById('complete-btn-one');
    button.disabled = true;
    button.innerHTML ='Disabled';
})
// disabnle 2
document.getElementById('complete-btn-two').addEventListener('click', function()
{
    const button= document.getElementById('complete-btn-two');
    button.disabled = true;
    button.innerText = 'Disabled';

})

// disable 3

document.getElementById('complete-btn-three').addEventListener('click', function(){
    const button = document.getElementById('complete-btn-three');
    button.disabled = true;
    button.innerText = 'Disabled';
})

// disable 4
document.getElementById('complete-btn-four').addEventListener('click', function(){
    const button = document.getElementById('complete-btn-four');
    button.disabled = true;
    button.innerText ='Disabled';
})
// disable 5
document.getElementById('complete-btn-five').addEventListener('click', function(){
    const button = document.getElementById('complete-btn-five');
    button.disabled = true;
    button.innerText ='Disabled';
})

// disable 6
document.getElementById('complete-btn-six').addEventListener('click', function(){
    const button = document.getElementById('complete-btn-six');
    button.disabled = true;
    button.innerText ='Disabled';
})




document.getElementById('first-text').style.display = 'none';
document.getElementById('second-text').style.display = 'none';
document.getElementById('third-text').style.display ='none';
document.getElementById('fourth-text').style.display ='none';
document.getElementById('five-text').style.display ='none';
document.getElementById('six-text').style.display ='none';


// document.getElementById('content-text').style.display='none';

document.getElementById('complete-btn-one').addEventListener('click',
    function(){
        document.getElementById('first-text').style.display ='block';
        document.getElementById('second-text').style.display ='none';
        document.getElementById('third-text').style.display ='none';
        document.getElementById('fourth-text').style.display ='none';
        document.getElementById('five-text').style.display ='none';
        document.getElementById('six-text').style.display ='none';
        const d1 = new Date();
        document.getElementById('date1').innerText = d1.toLocaleTimeString();

        const text = "Adding some thing new";
        document.getElementById('text1').innerText = text;
          
        const  text1 = document.getElementById('fix1').innerText;
        document.getElementById('text1').innerText = text1;
        // const text = document.getElementById('first-text').innerText;
        // console.log(text);


    }
)

document.getElementById('complete-btn-two').addEventListener('click', 
    function(){
        
        document.getElementById('first-text').style.display='block';
        document.getElementById('second-text').style.display ='block';
        document.getElementById('third-text').style.display ='none';
        document.getElementById('fourth-text').style.display ='none';
        document.getElementById('five-text').style.display ='none';
        document.getElementById('six-text').style.display ='none';

        const d2 = new Date();
        document.getElementById('date2').innerText= d2.toLocaleTimeString();

        const  text2 = document.getElementById('pay').innerText;
        document.getElementById('text2').innerText = text2;

    })

    document.getElementById('complete-btn-three').addEventListener('click', function(){
        document.getElementById('first-text').style.display = 'block';
        document.getElementById('second-text').style.display='block';
        document.getElementById('third-text').style.display='block';
        document.getElementById('fourth-text').style.display='none';
        document.getElementById('five-text').style.display='none';
        document.getElementById('six-text').style.display='none';

        const d3 = new Date();
        document.getElementById('date3').innerText = d3.toLocaleTimeString();
    //    get innet text
        const  text3 = document.getElementById('fix').innerText;
        // set inner text
        document.getElementById('text3').innerText = text3;
        
    })

    document.getElementById('complete-btn-four').addEventListener('click', function(){
        document.getElementById('first-text').style.display = 'block';
        document.getElementById('second-text').style.display='block';
        document.getElementById('third-text').style.display='block';
        document.getElementById('fourth-text').style.display='block';
        document.getElementById('five-text').style.display='none';
        document.getElementById('six-text').style.display='none';
        const d4 = new Date();
        document.getElementById('date4').innerText = d4.toLocaleTimeString();

        const  text4 = document.getElementById('integrate').innerText;
        document.getElementById('text4').innerText = text4;
        
    })

    document.getElementById('complete-btn-five').addEventListener('click', function(){
        document.getElementById('first-text').style.display = 'block';
        document.getElementById('second-text').style.display='block';
        document.getElementById('third-text').style.display='block';
        document.getElementById('fourth-text').style.display='block';
        document.getElementById('five-text').style.display='block';
        document.getElementById('six-text').style.display='none';
        const d5 = new Date();
        document.getElementById('date5').innerText = d5.toLocaleTimeString();

        const text5 = document.getElementById('add').innerText;
        document.getElementById('text5').innerText = text5;
    })

    document.getElementById('complete-btn-six').addEventListener('click', function(){
        document.getElementById('first-text').style.display = 'block';
        document.getElementById('second-text').style.display='block';
        document.getElementById('third-text').style.display='block';
        document.getElementById('fourth-text').style.display='block';
        document.getElementById('five-text').style.display='block';
        document.getElementById('six-text').style.display='block';
        const d6 = new Date();
        document.getElementById('date6').innerText = d6.toLocaleTimeString();

        const text6 = document.getElementById('review').innerText;
        document.getElementById('text6').innerText = text6;
        
    })

    // color changes
    document.getElementById('press').addEventListener('click', function(){
        const colors =['rgb(169, 108, 121)', 'pink', 'rgb(158, 139, 176)', 'rgb(149, 180, 223)', 'steelblue', 'orange', 'rgb(141, 200, 188)', 'yellow', 'white'];

        const changeColor = colors[Math.floor(Math.random()* colors.length)] ;

        document.body.style.backgroundColor = changeColor;
    })

 
   