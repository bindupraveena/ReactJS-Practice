import React from 'react';
import classes from './BlogCard.module.css';
// import './style.css';
import { dashboardLogs } from './Utils';
const BlogCard = (props) => {
  dashboardLogs(props);
  return (
    <div className={classes.blogClass}>
      <h3>Employee Details {props.empcount} </h3>
      <p>Name: {props.name} </p>
      <p>Profession: {props.Profession}</p>
      <p>Works At: {props.worksat}</p>
    </div>
  );
};
export default BlogCard;
