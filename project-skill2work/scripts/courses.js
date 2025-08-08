const courses = [
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/js.webp',
    "courseheading": "Mastering JavaScript Fundamentals",
    "instructor": "Alice Johnson",
    "rating": 4,
    "price": 49.99
  },
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/react.webp',
    "courseheading": "React & Next.js from Scratch",
    "instructor": "David Kim",
    "rating": 4,
    "price": 59.99
  },
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/py.webp',
    "courseheading": "Python for Data Science",
    "instructor": "Maria Gonzales",
    "rating": 5,
    "price": 69.99
  },
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/stack.webp',
    "courseheading": "Full-Stack Web Development Bootcamp",
    "instructor": "James Lee",
    "rating": 3,
    "price": 89.99
  },
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/uiux.webp',
    "courseheading": "UI/UX Design Essentials",
    "instructor": "Sophia Patel",
    "rating": 3,
    "price": 39.99
  },
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/cc.webp',
    "courseheading": "Cloud Computing with AWS",
    "instructor": "Michael Smith",
    "rating": 4,
    "price": 79.99
  },
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/cs.webp',
    "courseheading": "Cybersecurity for Beginners",
    "instructor": "Olivia Brown",
    "rating": 4,
    "price": 54.99
  },
  {
    "banner": 'https://raw.githubusercontent.com/nessKenya/my-first-html/refs/heads/main/clock/ml.webp',
    "courseheading": "Machine Learning with TensorFlow",
    "instructor": "Ethan Wilson",
    "rating": 5,
    "price": 99.99
  }
]

const createcoursecard = (course) => `<div class="course-card">
    <div class="course-banner">
      <img src='${course.banner}' loading="lazy"  alt="course banner">
    </div>
    <h3>${course.courseheading}</h3>
    <p class='italic'>${course.instructor}</p>
    <p class='rating'>${showRating(course.rating)}</p>
    <p>$${course.price}</p>
</div>`;


const showRating = (rating) => {
  let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '&starf;' : '&star;';
    }
    return stars;
}

const courselistinghtml = courses.map(course => createcoursecard(course)).join('');

document.querySelector('#course-listing').innerHTML = courselistinghtml;
