const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const am_pm =document.getElementById("am-pm")
    const clockRun = ()=>{
        let time = new Date()
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let second = time.getSeconds()
            hour.innerHTML = hours
            min.innerHTML = minutes
            sec.innerHTML = second

            if(hours > 12){
                am_pm.innerHTML = "PM"
            }else{
                am_pm.innerHTML = "AM"
            }
    }
setInterval(clockRun,1000)

