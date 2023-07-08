const url='localhost:3000'

$(document).ready(function($) {
$('#camera').on('click',()=>{
    const nurl=url+'camera'
    fetch(url,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
})
})