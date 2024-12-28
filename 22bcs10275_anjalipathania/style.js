function calculateIndex() {
    // Get input values
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const airQuality = parseFloat(document.getElementById('airQuality').value) || 0;
    const safety = parseFloat(document.getElementById('safety').value) || 0;
    const education = parseFloat(document.getElementById('education').value) || 0;
    const healthcare = parseFloat(document.getElementById('healthcare').value) || 0;
    const housing = parseFloat(document.getElementById('housing').value) || 0;

    // Calculate total and average
    const total = transport + airQuality + safety + education + healthcare + housing;
    const average = (total / 60) * 100; // Convert to percentage

    // Display the result
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.textContent = `Ease of Living Index: ${average.toFixed(2)}%`;
}
