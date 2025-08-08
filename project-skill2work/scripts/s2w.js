const reviews = [
  {
    "reviewtext": "This platform helped me go from having zero coding experience to landing my first junior developer role in just six months.",
    "reviewer": "Daniel Harper",
    "reviewcompany": "CodeSprint Academy"
  },
  {
    "reviewtext": "The courses are practical and aligned with real industry needs. I secured a remote data analyst position within weeks of completing my training.",
    "reviewer": "Leila Thompson",
    "reviewcompany": "DataEdge Solutions"
  },
  {
    "reviewtext": "Thanks to the mentorship and job placement support, I transitioned from retail into a full-time UX design role.",
    "reviewer": "Oscar Mendez",
    "reviewcompany": "PixelPath Studios"
  },
  {
    "reviewtext": "The career resources were invaluable. I polished my portfolio, improved my interviewing skills, and got hired at a startup I love.",
    "reviewer": "Priya Nair",
    "reviewcompany": "TalentForge Tech"
  },
  {
    "reviewtext": "I appreciated the hands-on projects and networking opportunities. They gave me the confidence and skills to freelance as a web developer.",
    "reviewer": "Maxwell Reed",
    "reviewcompany": "BrightWorks Digital"
  }
]

let currentreview = 0;

const generatereview = (review) => `<p>
    <span class="quotes">&ldquo;</span><br>
    "${review.reviewtext}"
</p>
<p class='italic'>${review.reviewer}</p>
<small class='highlight'>${review.reviewcompany}</small>
`;

const reviewdiv = document.querySelector('#review');

reviewdiv.innerHTML = generatereview(reviews[currentreview]);

document.querySelector('#prevreview').addEventListener('click', () => {
  if (currentreview === 0) {
    currentreview = 0;
  } else {
    currentreview -= 1;
  }
  reviewdiv.innerHTML = generatereview(reviews[currentreview]);
});

document.querySelector('#nextreview').addEventListener('click', () => {
  if (currentreview === 4) {
    currentreview = 4;
  } else {
    currentreview += 1
  }
  reviewdiv.innerHTML = generatereview(reviews[currentreview]);
});
