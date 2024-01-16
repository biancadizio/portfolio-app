// import styled from 'styled-components';

// export const ToggleMenuWrapper = styled.div`
//   margin-top: 40px;
//   display: none;
//   align-items: center;

//   @media (max-width: 815px) {
//     display: block;
//     background: none;
//     border: none;
//     color: white;
//     font-size: 1.2rem;
//     cursor: pointer;
//     margin-right: 15%;
//   }
// `;

// export const ButtonToggleMenu = styled.button`
//   color: grey;
//   border: none;
//   background: none;
// `;



// export const Button = styled.div`
//   line-height: 50px;
//   height: 50px;
//   text-align: center;
//   width: 250px;
//   cursor: pointer;
// `;

// export const ButtonOne = styled(Button)`
//   color: grey;
//   transition: all 0.3s;
//   position: relative;
//   margin-top: 30px;

//   span {
//     transition: all 0.3s;
//   }

//   &:before {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//     opacity: 0;
//     transition: all 0.3s;
//     border-top-width: 1px;
//     border-bottom-width: 1px;
//     border-top-style: solid;
//     border-bottom-style: solid;
//     border-top-color: grey;
//     border-bottom-color: grey;
//     transform: scale(0.1, 1);
//   }

//   span {
//     z-index: 2;
//     position: relative;
//   }

//   &:hover span {
//     letter-spacing: 2px;
//   }

//   &:hover:before {
//     opacity: 1;
//     transform: scale(1, 1);
//   }

//   &:after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//     transition: all 0.3s;
//     background-color: transparent;
//   }

//   &:hover:after {
//     opacity: 0;
//     transform: scale(0.1, 1);
//   }
// `;

// export const HeaderWrapper = styled.header`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   background-color: #111111;
//   color: white;
//   padding: 1rem 5%;
//   z-index: 1000;
//   font-size: 1.2rem;

//   margin-top: 70px;
//   height: 70px;

//   @media (max-width: 815px) {
//     padding: 1rem 2%;
//   }
// `;

// export const LeftContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   background-color: black;
//   padding: 1.5rem 5%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   color: white;
//   z-index: 1001;
//   margin: 0;

//   @media (max-width: 815px) {
//     padding: 1.5rem 2%;
//   }
// `;

// export const Title = styled.h2`
//   margin: 0;
//   color: #ffffff;
//   font-size: 2rem;

//   @media (max-width: 815px) {
//     font-size: 1.5rem;
//   }
// `;

// export const Description = styled.p`
//   margin: 0;
//   color: #b9ef37;
//   font-size: 1.2rem;

//   @media (max-width: 815px) {
//     font-size: 1rem;
//   }
// `;

// export const Navigation = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 80%;

//   @media (max-width: 815px) {
//     flex-direction: column;
//     align-items: flex-end;
//     width: 100%;
//   }
// `;

// export const MobileMenuButton = styled.button`
//   margin-top: 40px;
//   display: none;
//   align-items: center;

//   @media (max-width: 815px) {
//     display: block;
//     background: none;
//     border: none;
//     color: white;
//     font-size: 1.2rem;
//     cursor: pointer;
//     margin-right: 15%;
//   }
// `;

// export const MobileMenu = styled.div`
// display: flex;
// flex-direction: column;
// position: fixed; /* Alterado de absolute para fixed */
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background-color: black;
// justify-content: center;
// align-items: center;
// z-index: 1002; /* Z-index maior que os outros elementos para sobrepor */
// `;





// // Restante do código
