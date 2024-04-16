// Dummy JSON data
const collegeData = [
    { cdRank: 1, collegeName: "ABXC College", courseFee: 30000, avPackage: "88,000", hgtPackage: "1,000,000", userReview: 8.5, reviewOutOf: 10, ranking: 10 },
    { cdRank: 2, collegeName: "DEF College", courseFee: 22000, avPackage: "85,200", hgtPackage: "950,000", userReview: 7.2, reviewOutOf: 10, ranking: 8 },
    { cdRank: 3, collegeName: "XYZ College", courseFee: 78000, avPackage: "78,120", hgtPackage: "800,000", userReview: 5.3, reviewOutOf: 10, ranking: 4 },
    { cdRank: 4, collegeName: "LMN College", courseFee: 54000, avPackage: "79,000", hgtPackage: "900,000", userReview: 6.4, reviewOutOf: 10, ranking: 6 },
    { cdRank: 5, collegeName: "PQR College", courseFee: 21000, avPackage: "95,000", hgtPackage: "1,100,000", userReview: 7.5, reviewOutOf: 10, ranking: 3 },
    { cdRank: 6, collegeName: "SXP College", courseFee: 47000, avPackage: "91,000", hgtPackage: "1,050,000", userReview: 8.9, reviewOutOf: 10, ranking: 1 },
    { cdRank: 7, collegeName: "VWX College", courseFee: 30000, avPackage: "87,000", hgtPackage: "980,000", userReview: 8.1, reviewOutOf: 10, ranking: 5 },
    { cdRank: 8, collegeName: "XZXA College", courseFee: 65000, avPackage: "89,000", hgtPackage: "950,000", userReview: 6.7, reviewOutOf: 10, ranking: 2 },
    { cdRank: 9, collegeName: "BDD College", courseFee: 43000, avPackage: "77,000", hgtPackage: "850,000", userReview: 4.5, reviewOutOf: 10, ranking: 9 },
    { cdRank: 10, collegeName: "EGG College", courseFee: 50000, avPackage: "93,000", hgtPackage: "1,000,000", userReview: 9.0, reviewOutOf: 10, ranking: 7 },
    { cdRank: 11, collegeName: "HOJ College", courseFee: 35000, avPackage: "88,000", hgtPackage: "970,000", userReview: 8.2, reviewOutOf: 10, ranking: 11 },
    { cdRank: 12, collegeName: "KLM College", courseFee: 20000, avPackage: "84,000", hgtPackage: "920,000", userReview: 2.2, reviewOutOf: 10, ranking: 12 },
    { cdRank: 13, collegeName: "NOO College", courseFee: 75000, avPackage: "96,000", hgtPackage: "1,200,000", userReview: 7.3, reviewOutOf: 10, ranking: 13 },
    { cdRank: 14, collegeName: "QXS College", courseFee: 55000, avPackage: "94,000", hgtPackage: "1,050,000", userReview: 6.4, reviewOutOf: 10, ranking: 14 },
    { cdRank: 15, collegeName: "TUV College", courseFee: 28000, avPackage: "89,000", hgtPackage: "1,000,000", userReview: 5.5, reviewOutOf: 10, ranking: 15 },
    { cdRank: 16, collegeName: "WXYZ College", courseFee: 90000, avPackage: "90,000", hgtPackage: "1,100,000", userReview: 4.7, reviewOutOf: 10, ranking: 16 },
    { cdRank: 17, collegeName: "AXCD College", courseFee: 65000, avPackage: "80,000", hgtPackage: "900,000", userReview: 3.7, reviewOutOf: 10, ranking: 17 },
    { cdRank: 18, collegeName: "EFGH College", courseFee: 40000, avPackage: "82,000", hgtPackage: "930,000", userReview: 7.9, reviewOutOf: 10, ranking: 18 },
    { cdRank: 19, collegeName: "IFKP College", courseFee: 70000, avPackage: "87,000", hgtPackage: "1,000,000", userReview: 8.7, reviewOutOf: 10, ranking: 19 },
    { cdRank: 20, collegeName: "TCXO College", courseFee: 90000, avPackage: "93,000", hgtPackage: "1,050,000", userReview: 9.4, reviewOutOf: 10, ranking: 20 },
];


let displayedColleges = collegeData.slice(0, 10); // initial Render

// Function to display colleges in the table
function displayColleges() {
    const tableBody = document.getElementById('collegeBody');
    tableBody.innerHTML = ''; // Clear existing rows

    displayedColleges.forEach(college => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${college.cdRank}</td>
            <td>${college.collegeName}</td>
            <td>${college.courseFee}</td>
            <td><p>${college.avPackage} average Package</p><p>${college.hgtPackage} Highest Package</p></td>
            <td>${college.userReview} / ${college.reviewOutOf}</td>
            <td>${college.ranking}</td>
        `;
        tableBody.appendChild(row);
    });
}
let dataPointer = displayedColleges.length;

function fetchMoreColleges() {
    // Simulated Fetch request if fetch use of async and await takes place
    if (dataPointer >= 20) {
        dataPointer = 1;
    }
    setTimeout(function () {
        const newColleges = collegeData.slice(dataPointer, dataPointer + 4);
        dataPointer += 2;
        console.log(newColleges);
        displayedColleges = displayedColleges.concat(newColleges);
        displayColleges();
        document.getElementById('loading').style.display = 'none'; // Hide loading indicator after content is loaded
    }, 1000);
}

// Function to sort colleges based on a given property and order
let sortAsc = false;
function sortColleges(property) {

    displayedColleges.sort((a, b) => {
        if (sortAsc) {
            return a[property] - b[property];
        } else {
            return b[property] - a[property];
        }
    });
    sortAsc = !sortAsc
    // console.log(displayedColleges);
    displayColleges();
}

// Function to search colleges by name
function searchColleges() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    displayedColleges = collegeData.filter(college => college.collegeName.toLowerCase().includes(searchTerm));
    displayColleges();
}

// Event listener for scroll events
window.addEventListener('scroll', function () {
    // console.log("scroll");
    // console.log(this.window.scrollY);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById('loading').style.display = 'block';
        fetchMoreColleges();
    }
});

// Initial display of colleges
displayColleges();
