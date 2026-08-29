(function () {
  "use strict";

  function initCorrespondingPublications() {
    var root = document.querySelector(".corresponding-pubs");
    if (!root) return;

    var tabs = Array.prototype.slice.call(root.querySelectorAll(".corresponding-pubs-year"));
    var cards = Array.prototype.slice.call(root.querySelectorAll(".corresponding-pub-card"));
    var status = root.querySelector(".corresponding-pubs-status");
    var searchInput = root.querySelector("#corresponding-pubs-search-input");
    var clearButton = root.querySelector(".corresponding-pubs-search-clear");
    var emptyState = root.querySelector(".corresponding-pubs-empty");
    var availableYears = tabs.map(function (tab) { return tab.getAttribute("data-year"); });
    var params = new URLSearchParams(window.location.search);
    var requestedYear = params.get("year");
    var activeYear = availableYears.indexOf(requestedYear) !== -1
      ? requestedYear
      : root.getAttribute("data-default-year");
    var searchQuery = "";

    function normalize(value) {
      var normalized = String(value || "").toLowerCase();
      if (normalized.normalize) normalized = normalized.normalize("NFD");
      return normalized.replace(/[\u0300-\u036f]/g, "").trim();
    }

    cards.forEach(function (card) {
      card._publicationSearchText = normalize(
        card.textContent + " " + card.getAttribute("data-pub-year") + " " + card.getAttribute("data-year")
      );
    });

    function updateTabs() {
      tabs.forEach(function (tab) {
        var selected = tab.getAttribute("data-year") === activeYear;
        tab.classList.toggle("is-active", selected);
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.setAttribute("tabindex", selected ? "0" : "-1");
      });
    }

    function yearLabel(year) {
      var label = year;
      tabs.forEach(function (tab) {
        if (tab.getAttribute("data-year") === year) label = tab.getAttribute("data-label") || year;
      });
      return label;
    }

    function render() {
      var visibleCount = 0;

      cards.forEach(function (card) {
        var visible = searchQuery
          ? card._publicationSearchText.indexOf(searchQuery) !== -1
          : card.getAttribute("data-year") === activeYear;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      root.classList.toggle("is-searching", Boolean(searchQuery));
      if (clearButton) clearButton.hidden = !searchQuery;
      if (emptyState) emptyState.hidden = visibleCount !== 0;

      if (status) {
        if (searchQuery) {
          status.textContent = visibleCount + " result" + (visibleCount === 1 ? "" : "s") + " across all years";
        } else {
          status.textContent = "Showing " + visibleCount + " publication" + (visibleCount === 1 ? "" : "s") + " from " + yearLabel(activeYear);
        }
      }
    }

    function updateYearUrl(year) {
      if (!window.history || !window.history.replaceState) return;
      var url = new URL(window.location.href);
      url.searchParams.set("year", year);
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    }

    function clearSearch(focusInput) {
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      render();
      if (focusInput && searchInput) searchInput.focus();
    }

    function selectYear(year, updateUrl) {
      activeYear = year;
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      updateTabs();
      render();
      if (updateUrl) updateYearUrl(year);
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

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchQuery = normalize(searchInput.value);
        render();
      });

      searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && searchInput.value) {
          event.preventDefault();
          clearSearch(true);
        }
      });
    }

    if (clearButton) {
      clearButton.addEventListener("click", function () {
        clearSearch(true);
      });
    }

    updateTabs();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCorrespondingPublications);
  } else {
    initCorrespondingPublications();
  }
})();
