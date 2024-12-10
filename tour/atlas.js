var atlas_state = false

function toggleatlas() {
    atlas_state = !atlas_state
    document.getElementById("atlas-img").src = atlas_state ? "atlas.jpg" : "atlas.png"
}