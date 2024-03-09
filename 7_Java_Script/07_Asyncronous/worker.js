// Web workers
// This helps in keeping the main thread responsive and improving the overall performance of web applications. Web Workers are particularly useful for tasks that are computationally intensive or time-consuming, such as complex calculations, data processing, or handling large amounts of data.
// Types of Web Workers: There are two types of Web Workers - 
// Dedicated Workers (which are dedicated to a single script) and Shared Workers (which can be accessed by multiple scripts).

// Supported Browsers: Web Workers are supported in all modern browsers including Chrome, Firefox, Safari, and Edge.Overall, Web Workers help in improving the performance and responsiveness of web applications by offloading heavy tasks to background threads, keeping the user interface smooth and interactive.

onmessage = function (data){
    const ans = data.data.reduce((acc, item)=>item+acc , 0)
    postMessage(ans);

}