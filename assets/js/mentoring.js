document.addEventListener("DOMContentLoaded", function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".mentoring-person-has-publications"));
  var openCard = null;
  var closeTimer = null;

  if (!cards.length) return;

  function getPopover(card) {
    return card.querySelector(".mentoring-publications-popover");
  }

  function positionPopover(card) {
    var popover = getPopover(card);
    if (!popover || !card.classList.contains("is-publications-open")) return;

    var gap = 10;
    var edge = 8;
    var cardRect = card.getBoundingClientRect();
    var popoverRect = popover.getBoundingClientRect();
    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;
    var rightSpace = viewportWidth - cardRect.right - gap - edge;
    var leftSpace = cardRect.left - gap - edge;
    var useSidePlacement = viewportWidth > 760;
    var placement = "below";
    var left;
    var top;

    popover.classList.remove("is-right", "is-left", "is-above");

    if (useSidePlacement && rightSpace >= popoverRect.width) {
      placement = "right";
      left = cardRect.right + gap;
      top = cardRect.top + cardRect.height / 2 - popoverRect.height / 2;
    } else if (useSidePlacement && leftSpace >= popoverRect.width) {
      placement = "left";
      left = cardRect.left - popoverRect.width - gap;
      top = cardRect.top + cardRect.height / 2 - popoverRect.height / 2;
    } else {
      var belowSpace = viewportHeight - cardRect.bottom - gap - edge;
      var aboveSpace = cardRect.top - gap - edge;
      var placeAbove = belowSpace < Math.min(popoverRect.height, 230) && aboveSpace > belowSpace;
      placement = placeAbove ? "above" : "below";
      left = cardRect.left + cardRect.width / 2 - popoverRect.width / 2;
      top = placeAbove ? cardRect.top - popoverRect.height - gap : cardRect.bottom + gap;
    }

    left = Math.max(edge, Math.min(left, viewportWidth - popoverRect.width - edge));
    top = Math.max(edge, Math.min(top, viewportHeight - popoverRect.height - edge));

    popover.classList.toggle("is-right", placement === "right");
    popover.classList.toggle("is-left", placement === "left");
    popover.classList.toggle("is-above", placement === "above");
    popover.style.left = Math.round(left) + "px";
    popover.style.top = Math.round(top) + "px";
  }

  function closeCard(card) {
    if (!card) return;
    card.classList.remove("is-publications-open");
    card.setAttribute("aria-expanded", "false");
    var popover = getPopover(card);
    if (popover) popover.setAttribute("aria-hidden", "true");
    if (openCard === card) openCard = null;
  }

  function closeAll(except) {
    cards.forEach(function (card) {
      if (card !== except) closeCard(card);
    });
  }

  function openPublications(card) {
    window.clearTimeout(closeTimer);
    if (openCard === card && card.classList.contains("is-publications-open")) {
      positionPopover(card);
      return;
    }

    closeAll(card);
    openCard = card;
    card.classList.add("is-publications-open");
    card.setAttribute("aria-expanded", "true");
    var popover = getPopover(card);
    if (popover) popover.setAttribute("aria-hidden", "false");
    window.requestAnimationFrame(function () {
      positionPopover(card);
    });
  }

  function scheduleClose(card) {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(function () {
      if (!card.matches(":hover") && !card.contains(document.activeElement)) closeCard(card);
    }, 130);
  }

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      openPublications(card);
    });

    card.addEventListener("mouseleave", function () {
      scheduleClose(card);
    });

    card.addEventListener("focusin", function () {
      openPublications(card);
    });

    card.addEventListener("focusout", function (event) {
      if (!event.relatedTarget || !card.contains(event.relatedTarget)) scheduleClose(card);
    });

    card.addEventListener("click", function (event) {
      if (event.target.closest("a")) return;
      if (card.classList.contains("is-publications-open")) closeCard(card);
      else openPublications(card);
    });

    card.addEventListener("keydown", function (event) {
      if (event.target.closest("a")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (card.classList.contains("is-publications-open")) closeCard(card);
        else openPublications(card);
      } else if (event.key === "Escape") {
        closeCard(card);
        card.focus();
      }
    });
  });

  document.addEventListener("pointerdown", function (event) {
    if (openCard && !openCard.contains(event.target)) closeCard(openCard);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && openCard) {
      var card = openCard;
      closeCard(card);
      card.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (openCard) positionPopover(openCard);
  });

  window.addEventListener("scroll", function () {
    if (openCard) positionPopover(openCard);
  }, true);
});
