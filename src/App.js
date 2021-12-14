import React from 'react';
import './style.css';
import BlogCards from './BlogCard';
import { isArrayValid } from './Utils';

// class App extends React.Component {
//   blogData = [
//     { name: 'Bindu', Profession: 'Software ENgineer', 'Works At': 'Quantela' },
//     {
//       name: 'Manohar',
//       Profession: 'Sr. Software ENgineer',
//       'Works At': 'Cisco',
//     },

//     {
//       name: 'Kartheek',
//       Profession: 'Lead Software ENgineer',
//       'Works At': 'L&T',
//     },
//   ];

//   i = 0;
//   blogCards = isArrayValid(blogData)
//     ? blogData.map((item, index) => {
//         i++;

//         return (
//           <BlogCards
//             key={index}
//             name={item.name}
//             Profession={item.Profession}
//             worksat={item['Works At']}
//             empcount={i}
//           />
//         );
//       })
//     : [];
//   hideDetails = (e) => {
//     console.log(e);
//   };
//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.hideDetails()}>Hide details</button>
//         <br></br>
//         {blogCards}
//       </div>
//     );
//   }
// }

export default function App() {
  let blogData = [
    { name: 'Bindu', Profession: 'Software ENgineer', 'Works At': 'Quantela' },
    {
      name: 'Manohar',
      Profession: 'Sr. Software ENgineer',
      'Works At': 'Cisco',
    },

    {
      name: 'Kartheek',
      Profession: 'Lead Software ENgineer',
      'Works At': 'L&T',
    },
  ];

  let i = 0;
  let blogCards = isArrayValid(blogData)
    ? blogData.map((item, index) => {
        i++;

        return (
          <BlogCards
            key={index}
            name={item.name}
            Profession={item.Profession}
            worksat={item['Works At']}
            empcount={i}
          />
        );
      })
    : [];
  let hideDetails = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <button onClick={hideDetails()}>Hide details</button>
      <br></br>
      {blogCards}
    </div>
  );
}
