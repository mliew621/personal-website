const buttons = document.querySelectorAll("[data-carousel-button]")

const experienceDetails = [
  {
    date: "may 2026 — august 2026",
    title: "r&d engineering",
    description: "designing and prototyping automated tools for kidney stone laser lithotripsy research, increasing efficiency and repeatability.",
    image: "assets/IMG_8168.jpg",
    alt: "Research equipment for an automated kidney stone laser lithotripsy system",
    tags: ["prototyping", "mechanical design", "research"]
  },
  {
    date: "september 2025 — december 2025",
    title: "validation engineer",
    description: "writing and executing validation procedures for automated pharmaceutical production equipment, ensuring safety and reliability.",
    image: "assets/IMG_6387.jpg",
    alt: "Team photo at ATS automation",
    tags: ["manufacturing", "documentation", "automation"]
  },
  {
    date: "december 2024 — may 2025",
    title: "design and manufacturing support technician",
    description: "inspecting medical device components to reduce manufacturing bottlenecks, and optimizing receiving/inspection processes.",
    image: "assets/engineering_cpr_inc_logo.jpeg",
    alt: "Team photo at ATS automation",
    tags: ["process improvement", "ISO standards", "quality assurance"]
  },
  {
    date: "sep 2024 — present",
    title: "systems design engineering",
    description: "building a foundation across design, software, electronics, and human-centred problem solving at the University of Waterloo.",
    image: "assets/DSC03245.JPG",
    alt: "University of Waterloo engineering community",
    tags: ["systems thinking", "impact", "engineering"]
  }
]

const experienceItems = document.querySelectorAll("[data-experience]")
const experienceImage = document.querySelector("[data-experience-image]")
const experienceDate = document.querySelector("[data-experience-date]")
const experienceTitle = document.querySelector("[data-experience-title]")
const experienceDescription = document.querySelector("[data-experience-description]")
const experienceTags = document.querySelector("[data-experience-tags]")

function updateExperience(index) {
  const detail = experienceDetails[index]
  if (!detail || !experienceImage) return

  experienceItems.forEach((item, itemIndex) => {
    const isActive = itemIndex === index
    item.classList.toggle("is-active", isActive)
    item.setAttribute("aria-selected", isActive)
  })

  experienceImage.src = detail.image
  experienceImage.alt = detail.alt
  experienceDate.textContent = detail.date
  experienceTitle.textContent = detail.title
  experienceDescription.textContent = detail.description
  experienceTags.innerHTML = detail.tags.map(tag => `<span>${tag}</span>`).join("")
}

experienceItems.forEach(item => {
  const activateExperience = () => updateExperience(Number(item.dataset.experience))
  item.addEventListener("mouseenter", activateExperience)
  item.addEventListener("focus", activateExperience)
  item.addEventListener("click", activateExperience)
})

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})