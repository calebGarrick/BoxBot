const baseURL ='https://localhost:5000/'
function sendRequest(command){
    $.get(baseURL+$(this).name, function(data){
        console.log(`${data}`);
    })
}