function sendRequest(command){
    fetch(command, {
        method: 'GET',
        keepalive: false
      }).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err.message);
      });
}