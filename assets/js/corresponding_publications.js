(function () {
  "use strict";

  function initCorrespondingPublications() {
    var root = document.querySelector(".corresponding-pubs");
    if (!root) return;

    var tabs = Array.prototype.slice.call(root.querySelectorAll(".corresponding-pubs-year"));
    var cards = Array.prototype.slice.call(root.querySelectorAll(".corresponding-pub-card"));
    var status = root.querySelector(".corresponding-pubs-status");
    var availableYears = tabs.map(function (tab) { return tab.getAttribute("data-year"); });
    var params = new URLSearchParams(window.location.search);
    var requestedYear = params.get("year");
    var activeYear = availableYears.indexOf(requestedYear) !== -1
      ? requestedYear
      : root.getAttribute("data-default-year");

    function selectYear(year, updateUrl) {
      var visibleCount = 0;
      var yearLabel = year;

      tabs.forEach(function (tab) {
        var selected = tab.getAttribute("data-year") === year;
        if (selected) yearLabel = tab.getAttribute("data-label") || year;
        tab.classList.toggle("is-active", selected);
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.setAttribute("tabindex", selected ? "0" : "-1");
      });

      cards.forEach(function (card) {
        var visible = card.getAttribute("data-year") === year;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (status) {
        status.textContent = "Showing " + visibleCount + " publication" + (visibleCount === 1 ? "" : "s") + " from " + yearLabel;
      }

      if (updateUrl && window.history && window.history.replaceState) {
        var url = new URL(window.location.href);
        url.searchParams.set("year", year);
        window.history.replaceState({}, "", url.pathname + url.search + url.hash);
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        selectYear(tab.getAttribute("data-year"), true);
      });

      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        var direction = event.key === "ArrowRight" ? 1 : -1;
        var nextIndex = (index + direction + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        selectYear(tabs[nextIndex].getAttribute("data-year"), true);
      });
    });

    selectYear(activeYear, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCorrespondingPublications);
  } else {
    initCorrespondingPublications();
  }
})();
