
// import React from 'react'
// import { useState } from 'react';

// const Pagination = (props) => {

//  const  sortedData = props.paginationRecords;

//   // pagination.........
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(2);


//  const lastPostIndex = currentPage * postPerPage;
//  const firstPostIndex = lastPostIndex - postPerPage;
//  let pagiData = [...sortedData];
//  const paginationData = pagiData.slice(firstPostIndex, lastPostIndex);

//  let totalPosts = pagiData.length;
// let pages = [];
//  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
//    pages.push(i);
//  }

// let nThPage = pages.length;

//   return (
//     <div>
//       <div className="pagination">
//         <button
//           className="page"
//           onClick={() => {
//             if (currentPage !== 1) {
//               setCurrentPage(currentPage - 1);
//             }
//           }}
//         >
//           Prev
//         </button>

//         {pages.map((page, index) => {
//           return (
//             <button
//               key={index}
//               className={page === currentPage ? "active" : "page"}
//               onClick={() => {
//                 setCurrentPage(page);
//               }}
//             >
//               {page}
//             </button>
//           );
//         })}

//         <button
//           className="page"
//           onClick={() => {
//             if (currentPage !== nThPage) {
//               setCurrentPage(currentPage + 1);
//             }
//           }}
//         >
//           Next
//         </button>
//       </div>
//       ;
//     </div>
//   );
// }

// export default Pagination;
