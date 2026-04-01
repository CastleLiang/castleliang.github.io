---
---
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var rootEl = document.getElementById("academic-gallery-root");
    var dataEl = document.getElementById("academic-gallery-data");
    if (!rootEl || !window.React || !window.ReactDOM) {
      return;
    }

    var React = window.React;
    var ReactDOM = window.ReactDOM;
    var h = React.createElement;
    var rawImages = [];

    try {
      rawImages = JSON.parse(dataEl ? dataEl.textContent : "[]");
    } catch (error) {
      rawImages = [];
    }

    function titleize(value) {
      return String(value || "")
        .replace(/\.[^.]+$/, "")
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, function (char) {
          return char.toUpperCase();
        });
    }

    function parseSortDate(value) {
      if (!value) {
        return 0;
      }

      var normalized = String(value).toLowerCase().replace(/\./g, "");
      var monthMap = {
        january: 0,
        jan: 0,
        february: 1,
        feb: 1,
        march: 2,
        mar: 2,
        april: 3,
        apr: 3,
        may: 4,
        june: 5,
        jun: 5,
        july: 6,
        jul: 6,
        august: 7,
        aug: 7,
        september: 8,
        sep: 8,
        october: 9,
        oct: 9,
        november: 10,
        nov: 10,
        december: 11,
        dec: 11
      };

      var yearMatch = normalized.match(/20\d{2}/);
      if (!yearMatch) {
        return 0;
      }

      var year = parseInt(yearMatch[0], 10);
      var month = 0;

      Object.keys(monthMap).some(function (monthName) {
        if (normalized.indexOf(monthName) !== -1) {
          month = monthMap[monthName];
          return true;
        }
        return false;
      });

      return new Date(year, month, 1).getTime();
    }

    function buildGeneratedDescription(stem, title, tag, date) {
      var normalizedStem = String(stem || "").toLowerCase();

      if (normalizedStem.indexOf("travel") !== -1) {
        return "A candid travel moment around " + tag + ", documenting the broader academic journey surrounding tutorials, workshops, and in-person community exchange.";
      }

      if (normalizedStem.indexOf("meeting") !== -1) {
        return "A research meeting snapshot highlighting academic discussion, collaboration, and idea exchange with peers working on closely related data science problems.";
      }

      if (normalizedStem.indexOf("ai4ts") !== -1) {
        return "An activity photo from the AI4TS community, capturing exchange around time series learning, foundation models, and data-driven research collaboration.";
      }

      if (normalizedStem.indexOf("urbcomp") !== -1) {
        return "A workshop moment from " + tag + ", reflecting research exchange on urban computing, city intelligence, and spatio-temporal data science.";
      }

      if (normalizedStem.indexOf("webst") !== -1) {
        return "A workshop photo connected to " + title + ", capturing academic discussion on web-centric spatio-temporal intelligence and interdisciplinary applications.";
      }

      if (normalizedStem.indexOf("fm4ts") !== -1 || normalizedStem.indexOf("fm4st") !== -1) {
        return "A tutorial snapshot from " + tag + ", highlighting recent work on foundation models, data-centric AI, and the broader research community around temporal intelligence.";
      }

      return "An academic activity photo associated with " + title + ", recorded during " + date + " and reflecting recent tutorials, workshops, or collaborative research exchange.";
    }

    var metadataMap = {
      aaai26_fm4ts: {
        tag: "AAAI-26 Tutorial",
        title: "Foundation Models for Time Series Analysis",
        date: "January 2026, Singapore",
        description: "Organizer: Yuxuan Liang, Qingxiang Liu, Ming Jin, Xu Liu, Yushan Jiang, Dongjin Song, Shirui Pan, Qingsong Wen"
      },
      kdd25_fm4st: {
        tag: "KDD-25 Tutorial",
        title: "Foundation Models for Spatio-Temporal Data Science",
        date: "August 2025, Toronto",
        description: "Organizer: Yuxuan Liang, Haomin Wen, Yutong Xia, Ming Jin, Bin Yang, Flora Salim, Qingsong Wen, Shirui Pan, Gao Cong"
      },
      kdd25_urbcomp: {
        tag: "KDD-25 Workshop",
        title: "The 14th Workshop on Urban Computing",
        date: "August 2025, Toronto",
        description: "Special thanks to our keynote speakers Prof. Chang-Tien Lu, Prof. Yanjie Fu and Prof. Liang Zhao!"
      },
      www25_webst: {
        tag: "WWW-25 Workshop",
        title: "The 1st Workshop on Spatio-Temporal Data Mining from the Web",
        date: "May 2025, Sydney",
        description: "Special thanks to our keynote speakers Prof. Lexing Xie, Dr. Chang Xu, Prof. Mingyue Cheng and Prof. Zhengyang Zhou!"
      },
      kdd24_fm4ts: {
        tag: "KDD-24 Tutorial",
        title: "Foundation Models for Time Series Analysis",
        date: "August 2024, Barcelona",
        description: "Organizer: Yuxuan Liang, Haomin Wen, Yuqi Nie, Yushan Jiang, Ming Jin, Dongjin Song, Shirui Pan, Qingsong Wen"
      },
      kdd24_urbcomp: {
        tag: "KDD-24 Workshop",
        title: "The 13th Workshop on Urban Computing",
        date: "August 2024, Barcelona",
        description: "Special thanks to our keynote speakers Prof. Jessie Li and Prof. Yu Zheng!"
      },
      kdd25_travel: {
        tag: "KDD-25 Travel",
        title: "Travel Moment",
        date: "August 2025, Toronto",
        description: "A nice travel snapshot with so many senior researchers and professors taken around KDD 2025!"
      },
      "shonan meeting": {
        tag: "Shonan Meeting",
        title: "Advancing Mobility Data Science and Mobility AI",
        date: "Feburary 2024, Shonan Village, Japan",
        description: "Many thanks to the organizers, including Flora Salim, Andreas Zufle, Mahmoud Sakr, Kyoung-Sook Kim and Peer kroger"
      },
      www25_ai4ts: {
        tag: "WWW-25 Workshop",
        title: "AI for Time Series Analysis",
        date: "May 2025, Sydney",
        description: "Special thanks to our keynote speakers Prof. Longbing Cao, Prof. Ben Fulcher, Dr. Chang Xu, Prof. Bin Yang and Prof. Geoff Webb"
      }
    };

    var slides = rawImages.map(function (item, index) {
      var metadata = metadataMap[item.stem] || {};
      var title = metadata.title || titleize(item.stem || item.filename);
      var tag = metadata.tag || "Academic Activity";
      var date = metadata.date || "Recent activity";
      return {
        key: item.stem || "gallery-" + index,
        src: item.src,
        filename: item.filename,
        tag: tag,
        title: title,
        date: date,
        sortDate: parseSortDate(date),
        description: metadata.description || buildGeneratedDescription(item.stem, title, tag, date)
      };
    }).sort(function (a, b) {
      return b.sortDate - a.sortDate;
    });

    if (!slides.length) {
      return;
    }

    function GalleryArrow(props) {
      var iconClass = props.direction === "left" ? "fas fa-chevron-left" : "fas fa-chevron-right";

      return h(
        "button",
        {
          type: "button",
          onClick: props.onClick,
          className: "gallery-arrow gallery-arrow-" + props.direction,
          "aria-label": props.label
        },
        h("i", { className: iconClass })
      );
    }

    function ActivityGallery() {
      var _React$useState = React.useState(0),
        currentSlideIndex = _React$useState[0],
        setCurrentSlideIndex = _React$useState[1];
      var thumbRefs = React.useRef([]);

      var currentSlide = slides[currentSlideIndex];

      function goToSlide(index) {
        setCurrentSlideIndex((index + slides.length) % slides.length);
      }

      React.useEffect(function () {
        var handleKeyDown = function (event) {
          if (event.key === "ArrowLeft") {
            goToSlide(currentSlideIndex - 1);
          }
          if (event.key === "ArrowRight") {
            goToSlide(currentSlideIndex + 1);
          }
        };

        window.addEventListener("keydown", handleKeyDown);
        return function () {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [currentSlideIndex]);

      React.useEffect(function () {
        var activeThumb = thumbRefs.current[currentSlideIndex];
        if (activeThumb && activeThumb.scrollIntoView) {
          activeThumb.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
          });
        }
      }, [currentSlideIndex]);

      return h(
        "section",
        null,
        h(
          "div",
          { className: "academic-gallery-feature" },
          h(
            "aside",
            { className: "academic-gallery-aside" },
            h(
              "div",
              { className: "academic-gallery-aside-top" },
              h("h4", { className: "academic-gallery-aside-title" }, currentSlide.title),
              h(
                "div",
                { className: "academic-gallery-meta" },
                h("span", { className: "academic-gallery-pill academic-gallery-pill-primary" }, currentSlide.tag),
                h("span", { className: "academic-gallery-pill" }, currentSlide.date)
              )
            ),
            h("p", { className: "academic-gallery-description" }, currentSlide.description)
          ),
          h(
            "div",
            { className: "academic-gallery-stage" },
            h("div", { className: "academic-gallery-frame" }, h("img", {
              src: currentSlide.src,
              alt: currentSlide.title + " photo",
              className: "academic-gallery-image"
            })),
            h(GalleryArrow, { direction: "left", onClick: function () { goToSlide(currentSlideIndex - 1); }, label: "Previous activity photo" }),
            h(GalleryArrow, { direction: "right", onClick: function () { goToSlide(currentSlideIndex + 1); }, label: "Next activity photo" }),
            h(
              "div",
              { className: "academic-gallery-stage-tag" },
              currentSlide.tag
            ),
            h(
              "div",
              { className: "academic-gallery-stage-counter" },
              String(currentSlideIndex + 1) + " / " + String(slides.length)
            )
          )
        ),
        h(
          "div",
          { className: "academic-gallery-layout" },
          h(
            "div",
            { className: "academic-gallery-strip-shell" },
            h(
              "div",
              { className: "academic-gallery-strip-head" },
              h("div", { className: "academic-gallery-strip-title" }, "Quick Browse"),
              h("div", { className: "academic-gallery-strip-note" }, "Use arrows or keyboard")
            ),
            h(
              "div",
              { className: "academic-gallery-strip" },
              slides.map(function (slide, slideIndex) {
                var isActive = slideIndex === currentSlideIndex;
                return h(
                  "button",
                  {
                    key: slide.key,
                    type: "button",
                    ref: function (node) {
                      thumbRefs.current[slideIndex] = node;
                    },
                    onClick: function () {
                      goToSlide(slideIndex);
                    },
                    className: "academic-gallery-thumb" + (isActive ? " is-active" : "")
                  },
                  h("div", { className: "academic-gallery-thumb-media" }, h("img", {
                    src: slide.src,
                    alt: slide.title + " thumbnail",
                    className: "academic-gallery-thumb-image"
                  })),
                  h(
                    "div",
                    { className: "academic-gallery-thumb-body" },
                    h("div", { className: "academic-gallery-thumb-tag" }, slide.tag),
                    h("div", { className: "academic-gallery-thumb-title" }, slide.title)
                  )
                );
              })
            )
          )
        )
      );
    }

    ReactDOM.createRoot(rootEl).render(h(ActivityGallery));
  });
})();
