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

    var metadataMap = {
      aaai26_fm4ts: {
        tag: "AAAI 2026",
        title: "Foundation Models for Time Series Analysis",
        date: "January 2026, Singapore",
        description: "Tutorial session on foundation models for time series analysis, highlighting model design, evaluation, and emerging application scenarios."
      },
      kdd25_fm4st: {
        tag: "KDD 2025",
        title: "Foundation Models for Spatio-Temporal Data Science",
        date: "August 2025, Toronto",
        description: "Tutorial and survey activity centered on foundation models for spatio-temporal data science and their impact across data-driven research domains."
      },
      kdd25_urbcomp: {
        tag: "UrbComp @ KDD 2025",
        title: "Urban Computing Community Activity",
        date: "August 2025, Toronto",
        description: "Workshop organization and community exchange around urban computing, city intelligence, and AI for real-world societal systems."
      },
      www25_webst: {
        tag: "WWW 2025",
        title: "Spatio-Temporal Data Mining from the Web",
        date: "May 2025, Sydney",
        description: "Workshop activity focused on web-centric spatio-temporal intelligence, mining methodologies, and interdisciplinary applications."
      },
      kdd24_fm4ts: {
        tag: "KDD 2024",
        title: "Foundation Models for Time Series Analysis",
        date: "August 2024, Barcelona",
        description: "Tutorial presentation on the foundations, opportunities, and open directions of time series foundation models in modern AI systems."
      },
      kdd24_urbcomp: {
        tag: "UrbComp @ KDD 2024",
        title: "Urban Computing Workshop Activity",
        date: "August 2024, Barcelona",
        description: "Academic activity showcasing research exchange on urban analytics, spatio-temporal learning, and AI for city-scale systems."
      }
    };

    var slides = rawImages.map(function (item, index) {
      var metadata = metadataMap[item.stem] || {};
      return {
        key: item.stem || "gallery-" + index,
        src: item.src,
        filename: item.filename,
        tag: metadata.tag || "Academic Activity",
        title: metadata.title || titleize(item.stem || item.filename),
        date: metadata.date || "Recent activity",
        description:
          metadata.description ||
          "Photo record from recent academic activities, including tutorials, workshops, conference service, and collaborative research exchanges."
      };
    });

    if (!slides.length) {
      return;
    }

    function GalleryArrow(props) {
      var direction = props.direction;
      var iconClass = direction === "left" ? "fas fa-chevron-left" : "fas fa-chevron-right";
      var edgeClass = direction === "left" ? "left-3" : "right-3";

      return h(
        "button",
        {
          type: "button",
          onClick: props.onClick,
          className:
            "absolute " +
            edgeClass +
            " top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-slate-900/55 text-white shadow-lg shadow-slate-900/20 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2",
          "aria-label": props.label
        },
        h("i", { className: iconClass + " text-sm" })
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
        {
          className:
            "not-prose overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)]"
        },
        h(
          "div",
          {
            className:
              "border-b border-slate-200/80 bg-[linear-gradient(135deg,rgba(15,23,42,0.03),rgba(41,75,146,0.08),rgba(255,255,255,0.88))] px-5 py-4 sm:px-7 sm:py-5"
          },
          h(
            "div",
            { className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" },
            h(
              "div",
              null,
              h(
                "div",
                { className: "mb-2 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-800" },
                "Academic Activity Gallery"
              ),
              h(
                "h3",
                { className: "m-0 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.9rem]" },
                "Selected Academic Moments"
              ),
              h(
                "p",
                { className: "mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[0.96rem]" },
                "Images are loaded automatically from the local gallery directory. The scrolling filmstrip and keyboard navigation keep browsing smooth even as the collection grows."
              )
            ),
            h(
              "div",
              { className: "grid w-full max-w-xs grid-cols-2 gap-3 self-start sm:self-auto" },
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-center shadow-sm backdrop-blur" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Photos"),
                h("div", { className: "mt-1 text-xl font-semibold text-slate-900" }, String(slides.length))
              ),
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-center shadow-sm backdrop-blur" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Current"),
                h("div", { className: "mt-1 text-sm font-semibold text-slate-900" }, String(currentSlideIndex + 1) + " / " + String(slides.length))
              )
            )
          )
        ),
        h(
          "div",
          { className: "grid gap-6 px-5 py-5 sm:px-7 sm:py-7 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.9fr)] lg:items-start" },
          h(
            "div",
            { className: "space-y-4" },
            h(
              "div",
              { className: "relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.55)]" },
              h("div", { className: "aspect-video bg-slate-200" }, h("img", {
                src: currentSlide.src,
                alt: currentSlide.title + " photo",
                className: "h-full w-full object-cover transition-all duration-300"
              })),
              h(GalleryArrow, { direction: "left", onClick: function () { goToSlide(currentSlideIndex - 1); }, label: "Previous activity photo" }),
              h(GalleryArrow, { direction: "right", onClick: function () { goToSlide(currentSlideIndex + 1); }, label: "Next activity photo" }),
              h(
                "div",
                { className: "absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur" },
                currentSlide.tag
              ),
              h(
                "div",
                { className: "absolute bottom-4 right-4 rounded-full bg-slate-950/60 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur" },
                String(currentSlideIndex + 1) + " / " + String(slides.length)
              )
            ),
            h(
              "div",
              { className: "rounded-[1.35rem] border border-slate-200 bg-slate-50/70 p-3" },
              h(
                "div",
                { className: "mb-3 flex items-center justify-between gap-3" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Quick Browse"),
                h("div", { className: "text-xs text-slate-500" }, "Use arrows or keyboard")
              ),
              h(
                "div",
                { className: "flex gap-3 overflow-x-auto pb-1" },
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
                      className:
                        "group w-36 shrink-0 overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 " +
                        (isActive
                          ? "border-indigo-300 shadow-[0_10px_26px_-16px_rgba(41,75,146,0.7)] ring-1 ring-indigo-100"
                          : "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_10px_24px_-18px_rgba(15,23,42,0.5)]")
                    },
                    h("div", { className: "aspect-[4/3] overflow-hidden bg-slate-100" }, h("img", {
                      src: slide.src,
                      alt: slide.title + " thumbnail",
                      className:
                        "h-full w-full object-cover transition-transform duration-300 " +
                        (isActive ? "scale-[1.03]" : "group-hover:scale-[1.03]")
                    })),
                    h(
                      "div",
                      { className: "border-t border-slate-100 px-3 py-2" },
                      h("div", { className: "truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, slide.tag),
                      h("div", { className: "mt-1 line-clamp-2 text-sm font-medium leading-5 text-slate-800" }, slide.title)
                    )
                  );
                })
              )
            )
          ),
          h(
            "aside",
            { className: "rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(255,255,255,1))] p-5 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.45)]" },
            h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500" }, "Activity Basics"),
            h("h4", { className: "mt-3 text-xl font-semibold leading-8 tracking-tight text-slate-900" }, currentSlide.title),
            h(
              "div",
              { className: "mt-3 flex flex-wrap gap-2" },
              h("span", { className: "inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800" }, currentSlide.tag),
              h("span", { className: "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600" }, currentSlide.date)
            ),
            h("p", { className: "mt-4 text-sm leading-7 text-slate-600" }, currentSlide.description),
            h(
              "div",
              { className: "mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1" },
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, "Display"),
                h("div", { className: "mt-1 text-sm font-medium text-slate-800" }, "Hero image with aspect-safe layout")
              ),
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, "Navigation"),
                h("div", { className: "mt-1 text-sm font-medium text-slate-800" }, "Arrow keys, click, and scrollable filmstrip")
              ),
              h(
                "div",
                { className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" },
                h("div", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500" }, "Source"),
                h("div", { className: "mt-1 text-sm font-medium text-slate-800" }, "Auto-loaded from assets/img/gallery")
              )
            )
          )
        )
      );
    }

    ReactDOM.createRoot(rootEl).render(h(ActivityGallery));
  });
})();
