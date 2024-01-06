function updateDigitalWatch() {
     let now = new Date();
     let hours = String(now.getHours()).padStart(2, '0');
     let minutes = String(now.getMinutes()).padStart(2, '0');
     let seconds = String(now.getSeconds()).padStart(2, '0');
     let milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    
     document.getElementById('hours').textContent = hours;
     document.getElementById('minutes').textContent = minutes;
     document.getElementById('seconds').textContent = seconds;
     document.getElementById('milliseconds').textContent = milliseconds;
    
    
    //     let timeString = hours + ':' + minutes + ':' + seconds ;
    //     document.getElementById('digital-watch').textContent = timeString;
    }
    
    setInterval(updateDigitalWatch, 1);