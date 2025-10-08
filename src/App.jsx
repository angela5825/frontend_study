// function App() {
//   const fruits = ["Apple", "Bannana", "Cherry"];
//   return (
//     <>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}

import CardLayout from "./CardLayout";
import Child from "./Child";
import InfoCard from "./InfoCard";
import ProductCard from "./ProductCard";

//       </ul>
//     </>
//   );
// }

// function App() {
//   const books = [
//     { id: 1, title: "React Basics", published: true, publisher: "Manning" },
//     { id: 2, title: "Advanced Hooks", published: false, publisher: "OReilly" },
//     { id: 3, title: "JSX in Depth", published: true, publisher: "Packt" },
//   ];

//   // 출판된 책을 뿌려주고 싶다면?
//   // 1. filter method 를 이용하기

//   const published = books.filter((book) => book.published === true);

//   //
//   return (
//     <>
//       {published.length ? (
//         <h2>Published Books</h2>
//       ) : (
//         <p>No published books found.</p>
//       )}

//       {published.map((book, index) => {
//         return (
//           <article key={index}>
//             <strong>{book.title}</strong>
//             <em>- {book.publisher} </em>
//           </article>
//         );
//       })}
//     </>
//   );
// }

// import "./App.css";
// function App() {
//   return (
//     <>
//       <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
//         Bold & Italic
//       </span>
//       <br />
//       <label htmlForfor="username">Username : </label>
//       <input type="text" id="username" className="input-field" />
//     </>
//   );
// }

// function App() {
//   const divStyle = {
//     backgroundColor: "lightblue",
//     margin: "12px",
//     padding: "20px",
//     borderRadius: "8px",
//   };
//   const copyStyle = { ...divStyle };

//   return (
//     <>
//       <div style={divStyle}>DIV 1</div>
//       <div style={copyStyle}>DIV 2</div>
//       <div style={{ color: "darkblue", fontWeight: "bold", ...divStyle }}>
//         Div 3
//       </div>
//     </>
//   );
// }

// // 조건부
// function App() {
//   const styleA = {
//     color: "darked",
//     fontWeight: "bold",
//   };
//   const styleB = {
//     color: "navy",
//     textDecoration: "underline",
//   };
//   const isPrimary = false;

//   return (
//     <>
//       {/* <div style={styleA}> This text has dynamic styling. </div>
//       <div style={styleB}> This text has dynamic styling. </div> */}
//       <div style={isPrimary ? styleA : styleB}>
//         {" "}
//         This text has dynamic styling.{" "}
//       </div>
//       <span
//         style={{
//           fontSize: isPrimary ? "1.5em" : "1em",
//           opacity: isPrimary ? 1 : 0.5,
//         }}
//       >
//         So does this text.{" "}
//       </span>
//     </>
//   );
// }

// // CSS 의 잘못된 사용
// // .button 에 대해서 해당하는 스타일을 적용하게 했는데 App.jsx가 보기에는 ButtonA.css 와 ButtonB.css
// // 둘 다 가져오는거라서 두개 다 같이 적용하게 됨
// // react는 css를 모듈화시켜야 함
// // 그래서 항상 css는 file명.module.css <- 이렇게 !!

// import ButtonA from "./ButtonA";
// import ButtonB from "./ButtonB";
// function App() {
//   return (
//     <>
//       <ButtonA></ButtonA>
//       <ButtonB></ButtonB>
//     </>
//   );
// }

// 내부 컴포넌트는

// function Hello() {
//   return <h1>hello</h1>;
// }
// function App() {
//   return (
//     <>
//       <Hello></Hello>
//       <h2>World</h2>
//       <Child></Child>
//     </>
//   );
// }

// function App() {
//   // const cardData1 = {
//   //   title: "Props in React",
//   //   content: "Props pass ~~",
//   //   author: "Alice",
//   // };
//   // const cardData2 = {
//   //   title: "React Composition",
//   //   content: "content 2",
//   //   author: "Brian",
//   // };

//   // const cards = [
//   //   {
//   //     idx: 1,
//   //     title: "Props in React",
//   //     content: "Props pass ~~",
//   //     author: "Alice",
//   //   },
//   //   {
//   //     idx: 2,
//   //     title: "React Composition",
//   //     content: "content 2",
//   //     author: "Brian",
//   //   },
//   // ];

//   const product = {
//     name: "Laptop",
//     price: 123.4567,
//   };
//   // productCard라는 컴포넌트를 작성하고
//   //   <div>
//   //     <h2>제품 이름</h2>
//   //     <p> Price : 제품가격</p>
//   //   </div>
//   // 을 표시하는 화면을 완성
//   return (
//     <>
//       {/* <InfoCard {...cards[0]} />
//       <InfoCard {...cards[1]}></InfoCard> */}
//       {/* {cards.map((card) => (
//         <InfoCard key={card.idx} {...card}></InfoCard>
//       ))} */}

//       {/* <ProductCard {...product}></ProductCard> */}
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <CardLayout title="About">
//         <p>Props of Childeren</p>
//       </CardLayout>
//       <CardLayout title="Details">
//         <ul>
//           <li>Feature A</li>
//           <li>Feature B</li>
//           <li>Feature C</li>
//         </ul>
//       </CardLayout>
//       <CardLayout title="Details">
//         <p>Email : example@example.com</p>
//         <p>phone : 123-456-7890</p>
//       </CardLayout>
//     </>
//   );
// }

// children 활용 : 고차? 컴포넌트 ??

export default App;
