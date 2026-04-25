
    const offScreen = document.getElementById('offScreen')
    const desktopInterface = document.getElementById('desktopInterface')
    const dialInterface = document.getElementById('dialInterface');
    const dialDisplay = document.getElementById('dialDisplay');
    const incomingCall = document.getElementById('incomingCall')
    const waitinfForCall = document.getElementById('waitinfForCall')
    let ambullanceVideo = document.getElementById('carouselId')
    const callStatusText = document.getElementById('callStatusText')
    const callStatusTime = document.getElementById('callStatusTime')
    const dialTone = new Audio('./sepura_call.mp3');
    const the999 = new Audio('./999_mode_activated.mp3');
    const assigned = new Audio('./ambulance_assigned.mp3')
    const dispatch = new Audio('./dispatch.mp3');
    const medicCall = new Audio('./heavy_medic_call.mp3');
    const dispIpAddress = document.getElementById('dispIpAddress')
    const dispId = document.getElementById('Id')
    const dispAddr = document.getElementById('dispAddr')
    const tbody = document.getElementById('tbody')

     let currentCallId = 1000;
    //  let activeCall = {}
    let emergency = JSON.parse(localStorage.getItem('emergency')) || []

    
    const locations = [
            "under G, Ogbomoso",
            "anglican grammer school, ogbomoso",
            "Akande market, akande ogbooso",
            "Bovas, taki area, ogbomoso",
            "Sqict, Lautech area, ogbomoso",
            "Caretaker Junction, Ogbomoso",
            "Sabo Area, Ogbomoso",
            "yoako, Ilorin Road, Ogbomoso",
            "Takie Area, Ogbomoso",
            "Owode Market, Ogbomoso",
            "Palace Road,oke lerin, Ogbomoso",
            "General Hospital, Ogbomoso",
            "Oke Ado, Ogbomoso",
            "Isale Ora, Ogbomoso",
            "Stadium Road, Ogbomoso"
        ];

     const callerName = [
            "Adeyemi Obaloluwa",
            "Adewale Jenet",
            "Mujeeb Faruq",
            "Bunmi Adigun",
            "Obaloluwa Darasimi",
            "Ojuawo Babalola",
            "Adeoye Favour",
            "Bolale Akin",
            "Kaosara abdulazeez",
            "Stephen Comfort",
            "oluwatobi Segun",
            "Odedele Darasimi",
            "Victory Olojede",
            "Akinbowale toluwani",
            "Odu Emmanuel"
        ];

    let ipAddress = []
    function wakePhone(){
        console.log('work');
        offScreen.style.zIndex = '-3'
        let audio = new Audio('./samsung_coin_notificat.mp3');
        document.body.appendChild(audio)
        audio.play()
    }
    function emergencyInterface(){
        desktopInterface.style.zIndex = '-2'
        let audio = new Audio('./samsung_coin_notificat.mp3');
        document.body.appendChild(audio)
        audio.play()
    }

    function startEmergencyScenario() {
            currentCallId++;
            const newIp = `192.168.0.${Math.floor(Math.random() * 99)}`;
            const newAddr = locations[Math.floor(Math.random() * locations.length)];
            const newName = callerName[Math.floor(Math.random() * callerName.length)]

            activeCall = {
                id: currentCallId,
                ip: newIp,
                address: newAddr,
                status: 'Pending', // Initial state
                callerName: newName
            };

            // emergency.push(activeCall)
            JSON.stringify(emergency)
            emergency.push(activeCall)
            alert(emergency)

            dispId.innerText = `#${activeCall.id}`;
            dispIpAddress.innerText = activeCall.ip;
            dispAddr.innerText = activeCall.address;

            // Add Row to Table
            recordEmergency();
        }

    function pressKey(key) {
            if (dialDisplay.innerText.length < 16) {
                dialDisplay.innerText += key;
            }
        }
    
         function clearDial() {
            dialDisplay.innerText = dialDisplay.innerText.slice(0, -1);
        }


        function makeCall() {
            
            if(dialDisplay.innerText === '999') {
               
                 document.body.appendChild(dialTone)
                dialTone.play()

                dialInterface.style.zIndex = '-1'
                setTimeout(() => {
                     incomingCall.style.display = 'block'
                     waitinfForCall.style.display = 'none'

                     startEmergencyScenario()

                    
                }, 700);
            }


            
        }

        function endCall(){
            // offScreen.style.zIndex = '3'
            desktopInterface.style.zIndex = '2'
            dialInterface.style.zIndex = '1'
            dialTone.pause()
            dialTone.currentTime = 0;
            incomingCall.style.display = 'none'
            waitinfForCall.style.display = 'block'
            // let dplStatus = document.getElementById('dplStatus')
            // dplStatus.style.color = 'red'
            // dplStatus.innerText = 'Reject'
            rejectMission()
            updateTable('rejected')
        }



        function acceptcall(){
            // startEmergencyScenario();
            callStatusTime.innerText = ""

            document.body.appendChild(the999)
            the999.play()
            dialTone.pause()
            dialTone.currentTime = 0;
            callStatusText.innerText = "Dispatcher Connected";
            // for(i = 0; i < Math.floor(Math.random() * 60); i++){
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:01`;
                }, 1000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:02`;
                }, 2000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:03`;
                }, 3000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:04`;
                }, 4000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:05`;
                }, 5000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:06`;
                }, 6000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:07`;
                }, 7000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:08`;
                }, 8000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:09`;
                }, 9000)
                setTimeout(() => {
                callStatusTime.innerText = ""
                callStatusTime.innerText += `00:10`;
                }, 10000)
                setTimeout(() => {
                callStatusTime.innerText= ""
                endCall()
                }, 11000)

                
            // }

            
            

                // setTimeout(() => {
                     
                // startEmergencyScenario();
                // }, 2000);
        }


        function recordEmergency(){
            // table = ""
            tbody.innerHTML = ""

            for(i = 0; i < emergency.length; i++){
            tbody.innerHTML += 
            `
            <tr>
                <td>${emergency[i].id}</td>
                <td>${emergency[i].ip}</td>
                <td>${emergency[i].address}</td>
                <td>${emergency[i].callerName}</td>
                <td id="dplStatus" style="color:yellow;">${emergency[i].status}</td>
            </tr>
                `
                }
            
        }
  function holdMission(){

  } 

  function proceedMission(){
     
    

    ambullanceVideo.innerHTML = ""
    ambullanceVideo.innerHTML += 
            `
            <div class="carousel-inner h-100 rounded-4 align-content-center" role="listbox">
                <div class="carousel-item active h-100 rounded">
                    <img
                        src="200w (1).webp"
                        class="w-100 h-100 d-block"
                        alt="First slide"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="200w (2).webp"
                        class="w-100h-100 d-block"
                        alt="Second slide"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="200w (3).webp"
                        class="w-100 h-100 d-block"
                        alt="Third slide"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="200w.webp"
                        class="w-100h-100 d-block"
                        alt="Third slide"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="100.webp"
                        class="w-100h-100 d-block"
                        alt="Third slide"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src=""
                        class=" bg-black d-block"
                        alt=""
                    />
                </div>

                <div class="carousel-item">
                    <img
                        src=""
                        class=" bg-black d-block"
                        alt=""
                    />
                </div>
            </div>
            `

            setTimeout(() => {
                    ambullanceVideo.innerHTML = ""
            }, 26000)
            updateTable('accepted')


    
    document.body.appendChild(assigned)
    assigned.play()

    setTimeout(() => {
        document.body.appendChild(medicCall)
        medicCall.play()

    }, 2000)


     setTimeout(() => {
            document.body.appendChild(dispatch)
            dispatch.play()
    }, 5000)  

    // ambullanceVideo.style.display = 'block'
    // if (emergency[valNum].status = 'pending'){
        // emergency[valNum].status = 'attended'
    // }


       

  }

  function rejectMission(){
    updateTable('rejected')
  }

  

  function updateTable(data){ 
    const currentid = document.getElementById('currentid')
    const currentAddr = document.getElementById('currentAddr')
    const currentName = document.getElementById('currentName')
    const currentIpAddress = document.getElementById('currentIpAddress')
    
    
      
        if (emergency && emergency.length > 0) {
           
            let currentperson = emergency[emergency.length - 1]; 

           
            // if (currentperson) {
                
                currentperson.status = data; 

                currentid.innerText = currentperson.id;
                currentAddr.innerText = currentperson.address;
                currentName.innerText = currentperson.callerName;
                currentIpAddress.innerText = currentperson.ip;


            // }
        }
        

        // let currentperson = emergency[emergency.lenght-1].status

        // currentperson = data

        // document.getElementById('dplStatus, currentperson.status')
        tbody.innerHTML = ""

            for(i = 0; i < emergency.length; i++){
            tbody.innerHTML += 
            `
            <tr>
                <td>${emergency[i].id}</td>
                <td>${emergency[i].ip}</td>
                <td>${emergency[i].address}</td>
                <td>${emergency[i].callerName}</td>
                <td class="text-capitalize" id="dplStatus">${emergency[i].status}</td>
            </tr>
                `
            }

        if (data === 'accepted'){
            document.getElementById('dplStatus').style.color = 'green'
        } else if(data === 'rejected') {
            document.getElementById('dplStatus').style.color = 'red'
        }
        // dplStatus.innerText = rejected
        if(emergency[i].status === "accepted"){
            document.getElementById('dplStatus').style.color = 'green'
            tbody.innerHTML = ""

            for(i = 0; i < emergency.length; i++){
            tbody.innerHTML += 
            `
            <tr>
                <td>${emergency[i].id}</td>
                <td>${emergency[i].ip}</td>
                <td>${emergency[i].address}</td>
                <td>${emergency[i].callerName}</td>
                <td class="text-capitalize" id="dplStatus">${emergency[i].status}</td>
            </tr>
                `
            }
        }else if(emergency[i].status === "rejected"){
            document.getElementById('dplStatus').style.color = 'red'
        }else{
            document.getElementById('dplStatus').style.color = 'Yellow'
        }

            
  }