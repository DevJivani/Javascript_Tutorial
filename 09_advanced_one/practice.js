// console.log("123456789");


// async function a(){
//     const b = setTimeout(()=>{
//         console.log("hello world");    
//     },3000)
// }

// a()

// console.log("ahdsjfghjdgfs");

function a() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("hello world");
            resolve();
        }, 3000);
    });
}

async function main() {
    console.log("123456789");

    await a();   // Wait here until `a()` finishes

    console.log("ahdsjfghjdgfs");
}

main();
