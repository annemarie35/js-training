document.getElementById('one').addEventListener('click', (e) => {
    console.log('clicked')
})

document.getElementById('two').addEventListener('mouseover', (e) => {
    document.getElementById('two').innerHTML="Ohoo !!"
})

document.body.addEventListener('timeEvent', stateTime)
function stateTime(event) {
    console.log('event', event.detail)
    alert('event time' + event.detail)
}

const myEvent = new CustomEvent('timeEvent', {
    detail: new Date()
})

// Run in the browser console with
// document.body.dispatchEvent(myEvent)

document.getElementById('theme').addEventListener('click', (e) => {
    // dispatch event
    console.log('herrrrrrre')
    document.body.classList.toggle('theme2')
})

