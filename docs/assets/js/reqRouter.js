function sendRequest(command){
    $.get(command, function(data){
        console.log(`${data}`);
    })
}