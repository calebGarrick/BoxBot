function sendRequest(command){
    fetch(command, {
        method: 'Get',
        keepalive: false
      }).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err.message);
      });
}