const baseURL ='66.30.105.192:55000/'
function sendRequest(command){
    $.get(baseURL+$(this).name, function(data){
        console.log(`${data}`);
    })
}