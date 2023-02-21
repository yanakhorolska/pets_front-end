// import { useGetNoticeByIdQuery } from '../../redux/noticeByIdApi';

// const ModalNotice = () => {
//   const { data, isError, isLoading } = useGetNoticeByIdQuery(
//     '63f4d76951b8df42bda200c2'
//   );
//   console.log(data);

//   if (!data && data === undefined) {
//     console.log('empty');
//     return;
//   }

//   const {
//     title,
//     category,
//     petName,
//     dateOfBirth,
//     breed,
//     sex,
//     location,
//     price,
//     imageUrl,
//     comment,
//     owner,
//     email,
//     phone,
//   } = data;

//   //to do empty data responce
//   // to do empty comments

//   return (
//     <>
//       {isLoading ? <div> Loading ... </div> : null}
//       {!isLoading && !isError ? (
//         <div>
//           modal
//           <div>
//             <img src={imageUrl} alt="photoPets" />
//             <p>{category}</p>
//           </div>
//           <h3>{title}</h3>
//           <p>Name: {petName}</p>
//           <p>Birthday: {dateOfBirth}</p>
//           <p>Breed: {breed}</p>
//           <p>Place: {location}</p>
//           <p>The sex: {sex}</p>
//           <a href="mailto:nowhere@mozilla.org">Email: {email}</a>
//           <br />
//           <a href="tel:+49.157.0156">Phone: {phone}</a>
//           <p>Comments: {comment}</p>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default ModalNotice;
