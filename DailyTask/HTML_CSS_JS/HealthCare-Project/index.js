document.addEventListener('DOMContentLoaded', () => {
    const healthTipsBtn = document.getElementById('healthTipsBtn');
    const healthTipsContainer = document.getElementById('healthTipsContainer');

    healthTipsBtn.addEventListener('click', () => {
        getHealthTips((error, tips) => {
            if (error) {
                healthTipsContainer.innerHTML = `<p>Error fetching health tips: ${error}</p>`;
            } else {
                healthTipsContainer.innerHTML = `<ul>${tips.map(tip => `
                    <li>
                        <h3>${tip.title}</h3>
                        <p>${tip.description}</p>
                        <strong>Category:</strong> ${tip.category} <br>
                        <strong>Source:</strong> ${tip.source} <br>
                        <strong>Date:</strong> ${tip.date} <br>
                        <strong>Benefits:</strong> ${tip.benefits.join(', ')} <br>
                        <strong>Recommended Intake:</strong> ${tip.recommended_intake} <br>
                    </li>`).join('')}</ul>`;
            }
        });
    });

    function getHealthTips(callback) {
        fetch('https://api.npoint.io/24168fcbd0d19208b8bb')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) { // Ensure data is an array
                    callback(null, data);
                } else {
                    callback('Invalid API response structure', null);
                }
            })
            .catch(error => {
                callback(error.message, null);
            });
    }
});
