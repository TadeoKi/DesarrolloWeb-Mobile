
async function main(){
    const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
    const req = await fetch(url);
    if(req.ok){
        const data = await req.json();
        /*console.log(data);*/
        for (let i = 0; i < data.docs.length; i++){
            console.log(data.docs[i]);
        }
    }
    
}

main();