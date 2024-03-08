// ==UserScript==
// @name         HN Post Filter
// @namespace    http://tampermonkey.net/
// @version      2024-03-08
// @description  Filters through replies that match the query. For example, type in Ruby if you just want to see Ruby jobs in Who's Hiring.
// @author       Vishal Patel
// @match        https://news.ycombinator.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ycombinator.com
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        // Open console and run this. It will create a
        // search panel with a search text box.
        // This will let you filter out any comments in
        // a thread that do not match the input.
        // So if you only want to see "python" listings
        // in the latest Who's hiring thread, then you'll
        // be able to hide everything else.

        // Create overlay panel
        const overlayPanel = document.createElement('div');
        overlayPanel.style.position = 'fixed';
        overlayPanel.style.bottom = '0';
        overlayPanel.style.left = '0';
        overlayPanel.style.width = '100%';
        overlayPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlayPanel.style.padding = '10px';
        overlayPanel.style.boxSizing = 'border-box';
        overlayPanel.style.color = '#fff';
        overlayPanel.style.zIndex = '9999';

        // Create search input
        const searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'text');
        searchInput.setAttribute('placeholder', 'Search (Regex)');
        searchInput.style.width = '100%';
        searchInput.style.padding = '5px';
        searchInput.style.marginBottom = '10px';

        // Append search input to overlay panel
        overlayPanel.appendChild(searchInput);

        // Append overlay panel to body
        document.body.appendChild(overlayPanel);

        // Function to filter table rows
        function filterTableRows() {
            const searchRegex = new RegExp(searchInput.value, 'i');
            const tableRows = document.querySelectorAll('tr');

            tableRows.forEach(row => {
                const rowData = row.textContent;
                if (!searchRegex.test(rowData)) {
                    row.style.display = 'none';
                } else {
                    row.style.display = '';
                }
            });
        }

        // Event listener for input change
        searchInput.addEventListener('input', filterTableRows);
    }
})();
