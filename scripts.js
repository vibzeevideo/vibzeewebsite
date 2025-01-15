// Get modal elements
const betaModal = document.getElementById("betaModal");
const contributorModal = document.getElementById("contributorModal");

// Get buttons
const betaUserBtn = document.getElementById("betaUserBtn");
const contributorBtn = document.getElementById("contributorBtn");

// Get close buttons
const closeBetaModal = document.getElementById("closeBetaModal");
const closeContributorModal = document.getElementById("closeContributorModal");

// Open Beta User Modal
betaUserBtn.onclick = function() {
    betaModal.style.display = "block";
}

// Open Contributor Modal
contributorBtn.onclick = function() {
    contributorModal.style.display = "block";
}

// Close Beta User Modal
closeBetaModal.onclick = function() {
    betaModal.style.display = "none";
}

// Close Contributor Modal
closeContributorModal.onclick = function() {
    contributorModal.style.display = "none";
}

// Close modal if clicked outside of modal content
window.onclick = function(event) {
    if (event.target == betaModal) {
        betaModal.style.display = "none";
    }
    if (event.target == contributorModal) {
        contributorModal.style.display = "none";
    }
}
