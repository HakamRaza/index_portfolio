    // function on dialog, typewriter ===========================

    var dialogNum;

    function typeWriter(dialogNum) {

        var dataText = [
            ".....", // put as the fill in only so easy numbering start 1, lol
            "Hey, welcome back.. <br/> my designer not in the house right naw.. <br/> Please come in..", 

            "huff, huff... <br/> gotta burn the fat... <br/>  huff.. huff.. <br/> my designer will be coming back.. <br/> Do you want to know about my designer ?", 

            "..... <br/> ..... <br/> ...... <br/> I'm not here....<br/> go away...", 

            "Zzz..... <br/> Zzz..... <br/> my designer is awesome. <br/> Look at his achievements..",

            "Hmm... What is he doing there? <br/>", 

            "Hey....hey... Wanna see my designer projects...? <br/>  Don't tell that guy..",

            "Ooohh.... Wuw...... <br/>Hear me singing!", 

            "Ops... that's all folks, <br/>  leave some notes before you leave...",
        ];

        // console.log(dataText);
        var dataT = dataText[dialogNum];
        // console.log(dataT, typeof dataT);
        
        
        var totalLength = dataT.length;
        var textBegin = 0;
        var classN = document.getElementsByClassName('talkBox');

        
        var stopWriter = setInterval(function(){

            classN[dialogNum - 1].style.display = 'block';

            if (textBegin <= totalLength) {

                textBegin += 1;

                document.getElementById(`para${dialogNum}`).style.color = "blue";
                document.getElementById(`para${dialogNum}`).innerHTML = dataT.substring(0 , textBegin);

                // make the scroll down in chatroom to bottom
                // document.querySelectorAll('.talkBox').scrollTop = document.querySelectorAll('.talkBox').scrollHeight;

                
            } else {
                
                // stop the writing in looping
                clearInterval(stopWriter);
                textBegin = 0;
                // console.log("on writer stop");

                document.getElementById(`but${dialogNum}`).style.display='block';
                
                if (dialogNum == 8) {
                    document.getElementById('leave-name').style.display='block';
                    document.getElementById('leave-email').style.display='block';
                    document.getElementById('leave-msg').style.display='block';
                }

            }

        },10)

    }




    //function to arrange screen and scale ============================

    // detect window screen and height to arrange position
    var wW = window.innerWidth;
    var wH = window.innerHeight;

    // console.log('screen: ', wW, wH);
    var zeroOri = document.getElementById('zoomOrigin');

    // same as in css
    var scale = 2;

    //must same as CSS
    // origin picture
    var posOrigin = { x:0, y:0, W: 1000, H: 1000};
    // var posOrigin = { x:0, y:0, W: 1000, H: 1000};

    // x and y for cat is in percent, not pixel except w, h
    var posDoo = { x:0.83, y:0.38, W: 80, H:80};
    var posExe = { x:0.56, y:0.45, W: 80, H:80};
    var posShy = { x:0.74, y:0.25, W: 80, H:80};
    var posSit = { x:0.58, y:0.22, W: 80, H:80};
    var posLoo = { x:0.51, y:0.31, W: 80, H:80};
    var posEld = { x:0.32, y:0.28, W: 80, H:80};
    var posLou = { x:0.34, y:0.59, W: 80, H:80};
    var posSle = { x:0.22, y:0.46, W: 80, H:80};

    var offSetTO = (posOrigin.H * (scale - 1))/2;
    var offSetLO = (posOrigin.W * (scale - 1))/2;
    

    function centralisedS () {
        
        zeroOri.style.top = `${offSetTO}px`;   
        zeroOri.style.left = `${offSetLO}px`;
    }

    function centralisedOrigin () {
        
        zeroOri.style.top = `${(wH - posOrigin.H)/2}px`;   
        zeroOri.style.left = `${(wW - posOrigin.W)/2}px`;
    }

    var posN;
    var posOnFoc = 0;

    function centralisedCat (posN) {
        posOnFoc = posN;
        
        switch(posN) {

            case 1:
                var scalePosY = scale*posDoo.y*posOrigin.H;
                var scalePosX = scale*posDoo.x*posOrigin.W;
                break;
            
            case 2:
                var scalePosY = scale*posExe.y*posOrigin.H;
                var scalePosX = scale*posExe.x*posOrigin.W;
                break;

            case 3:
                var scalePosY = scale*posShy.y*posOrigin.H;
                var scalePosX = scale*posShy.x*posOrigin.W;
                break;


            case 4:
                var scalePosY = scale*posSit.y*posOrigin.H;
                var scalePosX = scale*posSit.x*posOrigin.W;
                break;


            case 5:
                var scalePosY = scale*posLoo.y*posOrigin.H;
                var scalePosX = scale*posLoo.x*posOrigin.W;
                break;

            case 6:
                var scalePosY = scale*posEld.y*posOrigin.H;
                var scalePosX = scale*posEld.x*posOrigin.W;
                break;

            case 7:
                var scalePosY = scale*posLou.y*posOrigin.H;
                var scalePosX = scale*posLou.x*posOrigin.W;
                break;
            
            case 8:
                var scalePosY = scale*posSle.y*posOrigin.H;
                var scalePosX = scale*posSle.x*posOrigin.W;
                break;
            
            default:
                break;

        }

        zeroOri.style.top = `${offSetTO - scalePosY + 0.6*wH}px`;   
        zeroOri.style.left = `${offSetLO - scalePosX + 0.6*wW}px`;

        typeWriter(posN);
    }

    // detect window resize to triggered event
    // addEventListener('resize', centralisedCat(posOnFoc));
    // window.onresize = centralisedCat(posOnFoc);


    // function moving by key =====================================

    var posInc = 0;

    document.addEventListener('keydown', function(evt) {
        
        switch(evt.keyCode) {

        case 39:
            if (posInc <=7){
                posInc += 1;

            } else {
                posInc = 8;
            }
            break; //remember to put break if found to stop iteration

        case 37:
            if (posInc >=0){
                posInc -= 1;

            } else {
                posInc = 0;
            }
            break;

        case 38:
            if (posInc <=7){
                posInc += 1;

            } else {
                posInc = 8;
            }
            break;

        case 40:
                if (posInc >=0){
                posInc -= 1;

            } else {
                posInc = 0;
            }
            break;

        default:
            console.log('Wrong Key, Use Arrow Key Only');

        }

        centralisedCat(posInc);
        console.log(posInc);

    })

    var posInc2 = 0;
    
    function centralisedCat2 () {
        

        if (posInc2 <= 7){
            posInc2 += 1;

        } else {
            posInc2 = 0;
        }

        console.log(posInc2);
        centralisedCat(posInc2);
    }




    // function related to music singing by cat =========================

    var msc = document.getElementById('mewsinging');
    var isPlaying = false;
    

    function playPauseSnd() {
        
        if (isPlaying == false) {
            // console.log("Hey, I can Play");
            msc.play();

            document.getElementById('but7').innerHTML = 'Pause';

            isPlaying = true;

            return false;
            // to stop the function proceed to below function
        }

        if (isPlaying == true) {
            // console.log("Hey, I can Pause");
            msc.pause();

            document.getElementById('but7').innerHTML = 'Play';

            isPlaying = false;

            return false;
            // to stop the function proceed to below function

        }
    }

    
    //function on modal ===============================================
    var modalN = 0;
    var modalMain = document.getElementById('modalMain');

    function openModal(intM) {
        // update global var
        modalN = intM;

        // console.log(modalN);
        // console.log(typeof modalNum);
        
        modalMain.style.display = 'grid';
        document.getElementById(`modal${modalN}`).style.display = 'grid';

    }

    function closeModal() {

        // console.log(modalN);
        document.getElementById(`modal${modalN}`).style.display = 'none';
        modalMain.style.display = 'none';
    }

    //function on dark ==================================================

    var darken = false;

    function darkMode() {
        
        if (darken == false) {
            
            document.getElementById('land').style.filter='grayscale(50%)';
            document.getElementById('home').style.filter='grayscale(50%)';
            document.getElementById('sky').style.backgroundImage = "url('images/night.png')";

            darken = true;
            return false;
        }

        if (darken == true) {

            document.getElementById('land').style.filter='grayscale(0%)';
            document.getElementById('home').style.filter='grayscale(0%)';
            document.getElementById('sky').style.backgroundImage = "url('images/morning.png')";

            darken = false;
            return false;

        }
    }

    //function to activate footer =====================================

    document.addEventListener('mousemove', function(e2){
        // console.log(e2.pageY);
        // console.log(window.innerHeight);

        if( e2.pageY >= (window.innerHeight-50)) {
            document.querySelector('footer').style.display ="grid";
            // document.querySelector('footer').style.transform ="traslate";
        }

        if (e2.pageY <= (window.innerHeight - 150)) {
            document.querySelector('footer').style.display ="none";

        }
        
    })

    //function to hide mobile menu =====================================
    document.addEventListener('mousemove', function(e3){
        // console.log(e2.pageY);
        // console.log(window.innerHeight);

        if( e3.pageX <=20) {
            document.getElementById('mobile-menu').style.transform ="translateX(0px)";
        }

        if (e3.pageX >= 195) {
            document.getElementById('mobile-menu').style.transform ="translateX(-200px)";

        }
        
    })