function searchTeams() {
    var input = $('input').val().toUpperCase();
    var $shownElements, isNum = parseInt(input);

    $('tr').hide().filter('tr.mnteamsHeader').show();

    try {
        if (isNum) {
            $shownElements = $(`tr a[name*="${input}"]`);
        } else {
            $shownElements = $(`td[class="mnteamsList glossary-term"]`).filter(function() {
                return $(this).text().trim().toUpperCase().includes(input);
            });
        }
        
        $shownElements.each(function() {
            $(this).closest('tr').show();
        })
    } catch (e) {
        $('tr').show();
        console.error("Searching error:",e);
    }
}