const contentSection = document.getElementById('content');

function createContentSection(title, images) {
  const section = document.createElement('section');
  section.className = 'px-4 md:px-8 py-8';
  const heading = document.createElement('h2');
  heading.className = 'text-2xl md:text-4xl font-bold mb-4';
  heading.innerText = title;
  section.appendChild(heading);

  const container = document.createElement('div');
  container.className = 'flex space-x-4 overflow-x-scroll scrollbar-hide';

  images.forEach((src) => {
    const img = document.createElement('img');
    img.className = 'w-64 h-40 object-cover rounded-md';
    img.src = src;
    img.alt = title;
    container.appendChild(img);
  });

  section.appendChild(container);
  return section;
}

const sections = [
  { title: 'Trending Now', images: ['img1.jpg', 'img2.jpg'] },
];
