document.getElementById('discover').addEventListener('click',
    function(event){
        event.preventDefault();
        window.location.href="./main.html"
    }
)

// document.getElementById('content-text').style.display='none';

document.getElementById('complete-btn-one').addEventListener('click',
    function(){
        document.getElementById('first-text').style.display ='block';
        document.getElementById('second-text').style.display ='none';
        document.getElementById('third-text').style.display ='none';
        document.getElementById('fourth-text').style.display ='none';
        console.log('tonny');
        // const text = document.getElementById('first-text').innerText;
        // console.log(text);


    }
)

document.getElementById('complete-btn-two').addEventListener('click', 
    function(){
        console.log('toma');
        document.getElementById('first-text').style.display='block';
        document.getElementById('second-text').style.display ='block';
        document.getElementById('third-text').style.display ='none';
        document.getElementById('fourth-text').style.display ='none';

    })

    document.getElementById('complete-btn-three').addEventListener('click', function(){
        document.getElementById('first-text').style.display = 'block';
        document.getElementById('second-text').style.display='block';
        document.getElementById('third-text').style.display='block';
        document.getElementById('fourth-text').style.display='none';
        console.log('yjkj');
    })

    document.getElementById('complete-btn-four').addEventListener('click', function(){
        document.getElementById('first-text').style.display = 'block';
        document.getElementById('second-text').style.display='block';
        document.getElementById('third-text').style.display='block';
        document.getElementById('fourth-text').style.display='block';
        console.log('sunny');
    })
   