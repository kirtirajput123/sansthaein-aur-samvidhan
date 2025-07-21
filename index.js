const events = [
    {
        title: "Republic Day",
        date: "January 26",
        description: "Republic Day marks the day when the Constitution of India came into effect, making India a republic.",
    },
    {
        title: "Constitution Day",
        date: "November 26",
        description: "Constitution Day honors the adoption of the Indian Constitution and Dr. B.R. Ambedkar's contribution.",

    },
    {
        title: "Law Day",
        date: "May 1",
        description: "Law Day promotes legal awareness among citizens and the importance of law in society.",
      
    },
    {
        title: "National Voters' Day",
        date: "January 25",
        description: "National Voters' Day encourages young people to participate in elections, a fundamental democratic right.",
      
    },
    {
        title: "Judiciary Day",
        date: "Various Dates",
        description: "Highlights the judiciary’s role in protecting citizens' rights and interpreting the Constitution.",
       
    },
    {
        title: "Independence Day",
        date: "August 15",
        description: "Marks India's freedom from colonial rule, leading to the adoption of the Constitution.",
      
    },
    {
        title: "National Law Day Seminars",
        date: "Various Dates",
        description: "Focus on contemporary constitutional issues and legal reforms, adapting the Constitution to modern times.",
      
    }
];

// Function to display events on the page
function displayEvents() {
    const container = document.getElementById('events-container');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <div class="event-title">${event.title}</div>
            <div class="event-date">${event.date}</div>
            <button class="view-more-btn" onclick="toggleDescription(this)">View More</button>
            <div class="event-description">${event.description}</div>
        `;

        container.appendChild(eventCard);
    });
}

// Function to toggle event description visibility
function toggleDescription(button) {
    const description = button.nextElementSibling;
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
    button.textContent = description.style.display === 'block' ? 'View Less' : 'View More';
}

// Call function to display events
displayEvents();