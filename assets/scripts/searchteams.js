function searchTeams() {
    var input = $('input').val().toUpperCase();
    var isNum = parseInt(input);

    try {
        $('tr').hide().filter('tr.mnteamsHeader').show();

        var $shownElements = isNum ? 
        $(`tr a[name*="${input}"]`) 
        : 
        $(`td[class="mnteamsList glossary-term"]`).filter(function() {
            return $(this).text().trim().toUpperCase().includes(input);
        });

        $shownElements.each(function() {
            $(this).closest('tr').show();
        })
    } catch (e) {
        $('tr').show();
        console.error("Searching error:",e);
    }
}