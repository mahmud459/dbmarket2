function Card({ img }){
    
    const cardStyle = {
       
     padding:"19px",
     backgroundColor: "#rgba(243, 236, 236, 0.5)",
     border: "none",
     borderRadius: "0.5rem",
     boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.5)",
       overflow: "hidden",
     
   };
   
   
   const titleStyle = {
       
       width:"100%",
     
     marginBottom: "0.5rem"
   };
   
   const priceTextStyle = {
       paddingTop:"4%",
     marginBottom: "0.8rem",
     fontSize: "1.1rem"
   };
   
   const autLink = {
       fontSize: "1rem",
     color: "rgb(128, 124, 124)",
     textDecoration: "underline",
     marginRight: "1%",
     textDecoration: "none",
   };
   
   const newPrice = {
      
     color: "black",
     fontWeight: "bold",
     fontSize: "1.2rem",
     
   };
   const top={
    borderTop:"1px solid rgb(175, 161, 161)",
    padding:"20px 0"
   }
   const text={
      
       paddingTop:"4%",
       marginRight:"2px",
       fontSize: "1.1rem",
        color: "rgb(114, 109, 109)",
         fontWeight: "600",
   }
   const oldPrice = { 
     textDecoration: "line-through",
     color: "#ccc",
     marginLeft: "0.3rem"
   };
   
   const starsStyle = {
     paddingTop:"15%",
     position:"absolute",
     left:"8%",
     color: "gold",
      
   };
   
   
     return (
       <>
        <div className="card-cont">
       <div className=" card  text-white  " style={cardStyle} >
         <div className="imStyle" >
            <div className="heartIcon"><i className="fa-solid fa-heart"></i></div>
         <img src={img} className="card-img-top p-2 rounded imageStyle" alt="Our Bird Friend"  />
             <div className="overlayStyle"></div>
       </div>
        
         <div className="card-body">
         
             <a href="./Products"className="card-title  fw-bold fs-5 mb-2 text-decoration-none" style={titleStyle}      >
               SaaS Dashboard Digital Products Title Here
             </a>
           <p className="card-text mb-2 " style={priceTextStyle}>
             <a href="#" style={autLink} >bythemepix</a>
             <span style={newPrice}>$32.99</span>
             <span style={oldPrice}>$67.00</span>
           </p>
           
           <div className="d-flex" style={top}>
             <small style={text}>1200 Sales</small>
             <div className="d-flex">
               <div style={starsStyle} className="d-flex">
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <div className="text-dark ms-2 pb-2" >(44)</div>
               </div>
               
                   <a href="#" className=" btn1 fw-bold " > Live Demo </a>
             </div>
          
           
           </div>
   
         </div>
       </div>
       </div>
    </>
    
     );
   };
   
   
   export default Card;