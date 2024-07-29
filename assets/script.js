function showCard(cardId) {
    document.querySelectorAll('.col-md-6').forEach(card => {
        card.classList.add('d-none');
    });
    document.getElementById(cardId).classList.remove('d-none');
}
