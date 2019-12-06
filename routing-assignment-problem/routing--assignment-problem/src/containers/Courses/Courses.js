import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        showCourse: false,
        selectedCourseId: null
    }

    onClickHandler(id) {
        this.setState({ showCourse: true, selectedCourseId: id });
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>

                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return(
                            <Link to={{pathname: this.props.match.url + "/" + course.id,
                                search: '?title=' + course.title}} 
                            onClick={() => this.onClickHandler(course.id)} 
                            key={course.id}>
                                <article className="Course"  >{course.title}</article>
                            </Link>)
                        })
                    }
                </section>
                {/* {this.state.showCourse && <Course courseId={this.state.selectedCourseId} />} */}
            </div>
        );
    }
}

export default Courses;