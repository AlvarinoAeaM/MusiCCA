// const music = new Audio('vande.mp3');
// music.play();


// creando los arreglos


// const songs = [
    
// ]

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/songs')
        .then(response => response.json())
        .then(data => {
            const songList = document.getElementById('song-list');
            songList.innerHTML = data.map(song => `
                <li class="songItem">
                    <span>${song.id}</span>
                    <img src="${song['Album Image URL']}" alt="${song['Track Name']}" />
                    <h5>
                        ${song['Track Name']}
                        <div class="subtitle">${song['Artist Name(s)']}</div>
                    </h5>
                </li>
            `).join('');
        })
        .catch(error => console.error('Error:', error));
});
