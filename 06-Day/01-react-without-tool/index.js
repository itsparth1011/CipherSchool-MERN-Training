// vanilla js

// const h1 = document. createElement ("h1");
// h1. textContent = "heading";

// const root = document.getElementById("root");

// root. append (h1);

// console. log (React.createElement) ;

// type, config, children

// h1

const root = document.getElementById("root");

// const h1Element = React.createElement(
//     "h1",
//     {
//         className : "heading",
//         id:"heading",
//     },
    
//      "Hello React"
//      );

// // h1Element is virtualDOM
// ReactDOM.createRoot(root).render(h1Element)



//Function component

// function helloWorld(){
//     return React.createElement(
//         "h1",
//         {
//             className : "heading",
//             id:"heading",
//         },
        
//          "Hello React"
//         );
// }




function helloWorld(){
    return <h1>Hello World</h1>;
}
ReactDOM.createRoot(root).render(helloWorld());